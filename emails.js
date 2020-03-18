const emails = [
  "test.email+spam@gmail.com",
  "testemail@gmail.com",
  "test.email@gmail.com"
];
const test2 = ["test.email+test@gmail.com", "test.email@gmail.com"];

console.assert(emailCheck(emails) === 1, "test1");
console.assert(emailCheck(test2) === 1, "test2");
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
