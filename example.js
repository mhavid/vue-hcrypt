import { HCrypt } from "./core.js";
const crypt = new HCrypt();

var key = 'xlkasxjasjksa'; // Your key, 16 char
var str = 'Hello World'; // Your string

var enc = crypt.encrypt(str, key);
var dec = crypt.decrypt('U2FsdGVkX1+VNY1SVqrq9eb/i5StLJmj6uYyXAAomZ1dXXxSptvA6mHOdPiTn4C8', key);

console.log('String : ' + str);
console.log('Enc : ' + enc);
console.log('Dec : ' + dec);