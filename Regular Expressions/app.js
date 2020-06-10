let username = "J";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+)$/i; // Change this line
let result = userCheck.test(username);

console.log(result);


//^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i