const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Query to target specific movie details
router.get('/', (req, res) => {
    const movieId = req.query.id;
    const sqlQuery =    `SELECT 
                            "movies"."title" as "movieTitle",
                            "movies"."poster" as "moviePoster",
                            "movies"."description" as "movieDesc",
                            ARRAY_AGG ("genres".name) "genres"
                        FROM "movies"
                        JOIN "movies_genres" 
                            ON "movies_genres"."movie_id" = "movies"."id"
                        JOIN "genres"
                            ON "genres"."id" = "movies_genres"."genre_id"
                        WHERE "movies"."id"=$1
                        GROUP BY "movieTitle", "moviePoster", "movieDesc";`;
    pool.query(sqlQuery, [movieId])
        .then(dbRes => {
            console.log(dbRes.rows);
            res.send(dbRes.rows);
        })
        .catch(err => {
            console.log('ERROR: Get movie details', err);
            res.sendStatus(500);
        });
});

module.exports = router;