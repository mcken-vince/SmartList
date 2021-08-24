/*
 * All routes for Reminders are defined here
 * Since this file is loaded in server.js into api/reminders,
 *   these routes are mounted onto /reminders
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

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
    console.log(req.body)
  })
  return router;
};
