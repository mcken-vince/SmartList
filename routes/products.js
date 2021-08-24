const express = require('express');
const router  = express.Router();
const productInfo = require('../public/helpers/productInfo');

module.exports = (db) => {

  router.post("/", (req,res) => {
    productInfo(req.body.reminder)
    .then((mRes) => {
      // console.log(mRes);
      let query = `INSERT INTO reminders (user_id, type_id, name, image_link, description, url, time)
      VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
      db.query(query, [req.session.userID, mRes[4], req.body.reminder, mRes[1], mRes[3], mRes[2], 'NOW()'])
        .then((results) => {
          // console.log('results: ###$$$### ', results.rows)
          return res.status(200).send({
            message: 'data inserted',
            result: results.rows
          })
        });
      // res.json({ success: true });
    })
  })

  return router
}