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
router.post('/change_info', verifyToken, async (req, res) => {
  // console.log(req.body);
  const inputData = req.body;
  async function HandleProcess() {
    result = await db.updateUserInfo(inputData.name, inputData.phone, inputData.address, inputData.email); // Truy vấn giá trị trạng thái
    if (result != "updateUserInfo-ERROR") {
      result2 = await db.queryUser(inputData.email);
      if (result2 != "queryUser-ERROR") {
        const token = jwt.sign(inputData.email, process.env.ACCESS_TOKEN_SECRET); //24h
        res.json({ token: token, user: result2 });
      }
      else {
        res.send("KHONG_THANH_CONG")
      }
    }
    else {
      res.send("KHONG_THANH_CONG")
    }
  }
  HandleProcess(); // Thực thi
})
router.post('/register', async (req, res) => {
  const inputData = req.body;
  var hashedPassword = bcrypt.hashSync(inputData.password, 8);

  async function HandleProcess() {
    result = await db.usersRegister(inputData.email, hashedPassword, inputData.name); // Truy vấn giá trị trạng thái
    if (result == "usersRegister-SUCCESS")
      res.send('THANH_CONG');
    else
      res.send('KHONG_THANH_CONG');
  }
  HandleProcess(); // Thực thi

})
router.post('/login', async (req, res) => {
  const inputData = req.body;
  var hashedPassword = bcrypt.hashSync(inputData.password, 8);
  // console.log(hashedPassword);
  async function HandleProcess() {
    result = await db.queryUser(inputData.email); // Truy vấn giá trị trạng thái
    if (result != "queryUser-ERROR") {
      let passwordIsValid = bcrypt.compareSync(inputData.password, result.password)
      if (passwordIsValid) {
        const token = jwt.sign(inputData.email, process.env.ACCESS_TOKEN_SECRET); //24h
        res.json({ token: token, user: result });
      }
      else {
        res.send("KHONG_THANH_CONG")
      }
    }
    else
      res.send('KHONG_THANH_CONG');
  }
  HandleProcess(); // Thực thi
})
router.post('/check_login', verifyToken, async (req, res) => {
  async function HandleProcess() {
    result = await db.queryUser(req.email);
      if (result != "queryUser-ERROR") {
        res.json({ user: result });
      }
      else {
        res.send("KHONG_THANH_CONG")
      }
  }
  HandleProcess(); // Thực thi
})
router.post('/refresh_token', verifyToken, (req, res) => {
  const token = jwt.sign(req.email, process.env.ACCESS_TOKEN_SECRET); //24h
  res.json({ token: token });
})


module.exports = router