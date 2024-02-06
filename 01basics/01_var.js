const accountId = 144553
let accountEmail = "vani@google.com"
var accountPassword = "12345"
accountCity ="Mumbai"
let accountState;

console.log(accountId);

accountEmail = "v@gmail.com";
accountPassword = "123";
accountCity ="Seoul"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*  
Prefer not to use  var
because of issue in block scope and functional scope 
*/