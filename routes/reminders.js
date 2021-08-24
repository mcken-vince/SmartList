/*
 * All routes for Reminders are defined here
 * Since this file is loaded in server.js into api/reminders,
 *   these routes are mounted onto /reminders
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const typeResponse = require('../public/helpers/wolframAPI');
const router  = express.Router();
const movieInfo = require('../public/helpers/movieInfo');

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `
    SELECT * 
    FROM reminders
    WHERE user_id = $1
    `;
    db.query(query, [req.session.userID])
      .then(data => {
        const reminders = data.rows;
        res.json({ reminders });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    typeResponse(req.body.reminder)
      .then((response) => {
        if (response[0] === "movies") {
          return movieInfo(req.body.reminder);
        }
      })
      .then((mRes) => {
        console.log(mRes);
        let query = `INSERT INTO reminders (user_id, type_id, name, image_link, description, url, time)
        VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
        db.query(query, [req.session.userID, mRes[4], req.body.reminder, mRes[1], mRes[3], mRes[2], 'NOW()'])
          .then((results) => {
            console.log('results: ###$$$### ', results.rows[0])
            return res.status(200).send({
              message: 'data inserted',
              result: results.rows[0]
            })
          });
        // res.json({ success: true });
    })

  })
  return router;
}