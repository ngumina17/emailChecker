const express = require("express");
var app = express();
const router = express.Router();


router.get('/', function (req, res) {
    let newEmailArray = req.body;
    let result = emailCheck(newEmailArray)
    res.send(String(result))
  })

  function clean(email) {
    let userDomainSplit = email.split("@");
    let userEmail = userDomainSplit[0]
      .split(".")
      .join("")
      .split("+")[0];
    userDomainSplit[0] = userEmail;
    return userDomainSplit.join("@");
  }
  
  function emailCheck(arr) {
    let cleanEmail = arr.map(email => {
      return clean(email);
    });
    let filteredEmails = cleanEmail.filter((email, idx) => {
      return cleanEmail.indexOf(email) == idx;
    });
    return filteredEmails.length;
  }



module.exports = router;