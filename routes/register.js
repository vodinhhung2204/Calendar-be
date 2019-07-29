const express = require("express");

const router = express.Router();
const User = require("../models/User.js");

/**
* @swagger
* /register:
*   post:
*     tags:
*       - User
*     name: Register
*     summary: Register
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/User'
*           type: object
*           properties:
*             username:
*               type: string
*             fullname:
*               type: string
*             password:
*               type: string
*             email:
*               type: email
*             role:
*               type: string
*         required:
*           - username, password, email, fullname, role
*     responses:
*       201:
*         description: Register is success!
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
