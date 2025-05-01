"use strict";

const loginrequest = {};

loginrequest.getLogin = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (username === process.env.username && password === process.env.password) {
    return res.status(200).json({
      message: "Successfully login",
    });
  } else {
    return res.status(400).json({
      message: "Invalid username or password",
    });
  }

};


module.exports = loginrequest;
