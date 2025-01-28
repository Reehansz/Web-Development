const fs = require("fs")
try {
    fs.writeFileSync("messageSyn.txt", "Hey there this is from synchronous methods")
    console.log("Written successfully")
    
}
catch (err) {
    console.error("Error creating file : ", err)
}

try {
    const data = fs.readFileSync("messageSyn.txt", "utf-8")
    console.log(data)
}
catch (err) {
    console.error("Error reading file : ", err)
}