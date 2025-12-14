const accountID = 144553
let accountEmail = "utsav@9gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 2  // not allowed
accountEmail = "uvuv@gmail.com"
accountPassword = "21212"
accountCity = "Benguluru"

console.log(accountID);
/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountID, accountEmail, accountPassword, accountCity, accountState])