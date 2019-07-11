const express = require("express");

const router = express.Router();
const User = require("../models/User.js");

/**
* @swagger
* /register:
*   post:
*     tags:
*       - Register
*     name: Register
*     summary: Register
*     security:
*       - bearerAuth: []
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - in: query
*         name: username, password, email, fullname, role
*         schema:
*           type: string, string, string, string, string
*         required:
*           - username, password, email, fullname, role
*     responses:
*       201:
*         description: Register is success!
*         schema:
*           $ref: '#/register'
*       400:
*         description: Register is fail!
*/

/* GET users listing. */
router.route("/")
  .post(async (req, res) => {
    const user = new User(req.body);
    if (await User.findOne({ username: user.username })) {
      return res.status(400).json({ message: `Username: ${user.username} was exist` });
    }
    if (user.password) {
      user.password = user.getHash(user.password);
    }
    return user.save()
      .then(() => res.status(201).json({ message: "Register successed !" }))
      .catch(err => res.status(400).json(err.errors));
  });

module.exports = router;
