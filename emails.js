const emails = [
  "test.email+spam@gmail.com",
  "testemail@gmail.com",
  "test.email@gmail.com"
];
//make a few more tests that return different values
console.assert(emailCheck(emails) === 1, "test1");
console.log("test completed");

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

console.log(emailCheck(emails));
