/*
 * All routes for Reminders are defined here
 * Since this file is loaded in server.js into api/reminders,
 *   these routes are mounted onto /reminders
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/",(req,res) => {
    query = `SELECT * FROM users WHERE name = $1`
    db.query(query, [req.body.username])
      .then(response => {
        if (response.rows.length === 0) {
          console.log("user doesn't exist");
          res.redirect('/');
        }

        const username = response.rows[0]['name'];
        req.session.username = username;
        req.session.userID = response.rows[0]['id'];
        res.redirect('/');
      })
      .catch(err => {
        return (err);

      })

  })
  return router;
};
