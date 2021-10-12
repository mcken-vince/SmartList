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
const foodInfo = require('../public/helpers/foodInfo');
const bookInfo = require('../public/helpers/bookInfo');
const productInfo = require('../public/helpers/productInfo');

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

        if (response[1] === "food") {
          return foodInfo(req.body.reminder);
        }

        if (response[0] === "books") {
          return bookInfo(req.body.reminder);
        }

        return productInfo(req.body.reminder);

      })
      .then((mRes) => {
        let query = `INSERT INTO reminders (user_id, type_id, name, image_link, description, url, time)
        VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
        db.query(query, [req.session.userID, mRes[4], req.body.reminder, mRes[1], mRes[3], mRes[2], 'NOW()'])
          .then((results) => {
            return res.status(200).send({
              message: 'data inserted',
              result: results.rows
            })
          })
      })
      .catch((err) => {
        return res.status(404).send({
          message: 'search failed',
        })
      })
    })

    router.delete("/:id", (req,res) => {
      let query = `DELETE FROM reminders WHERE id = $1`;
      db.query(query, [req.params.id])
        .then((results) => {
          return res.status(200).send({
            message: 'reminder deleted',
            result: results
          })
        })
    })

    router.get("/:id", (req, res) => {
      let query = `SELECT * FROM reminders WHERE id = $1`;
      db.query(query, [req.params.id])
        .then((results) => {
          return res.status(200).send({
            results: results.rows[0]
          })
        })
    })

  return router;
}
