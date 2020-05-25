require('dotenv').config();
const express = require("express");
const router = express.Router()


var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var db = require('../db/db');

function verifyToken(req, res, next) {
  let inputData = req.body;
  if (inputData.token == null) return res.sendStatus(401);
  jwt.verify(inputData.token, process.env.ACCESS_TOKEN_SECRET, (err, email) => {
    if (err) return res.sendStatus(403);
    req.email = email;
    next()
  })
}

router.get('/getProduct', (req, res) => {
  async function HandleProcess() {
    result = await db.queryProductDetails(); // Truy vấn giá trị trạng thái
    result2 = await db.queryTypeProduct();
    if (result != "queryProductDetails-ERROR" && result2 != "queryTypeProduct-ERROR")
      res.json({ type: result2, product: result });
    else console.log(result);
  }
  HandleProcess(); // Thực thi
})
router.get('/product_by_type/:id_type/:page', (req, res) => {
  async function HandleProcess() {
    result = await db.queryListProduct(req.params.id_type, req.params.page); // Truy vấn giá trị trạng thái
    if (result != "queryListProduct-ERROR") 
      res.send(result);
    else console.log(result);
  }
  HandleProcess(); // Thực thi
})

module.exports = router