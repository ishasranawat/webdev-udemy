/------------------TO read and write------------------------/
//To write in a file
const fs= require("fs");
fs.writeFile("message.txt", "HEllo from NodeJS!", (err) => {
  if (err) throw err;
console.log("The file has been saved!")
});

//To read a file (use utf8 else it will read in binary)
fs.readFile("message.txt","utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

/------------------npm package-----------------------------/
var generateName= require ("sillyname");  //for CJS (the "type" : "commonjs" in JSON file)
 import generateName from "sillyname";   //for ESM ("type" : "module")
 var sillyName= generateName();

 console.log(`My name is ${sillyName}`);

