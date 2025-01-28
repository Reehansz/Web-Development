const fs = require("fs")

fs.writeFile("message.txt","Hello from NodeJS! \n", (err)=>{
    if (err) throw err;
    console.log("File created successfully")
})

fs.appendFile("message.txt","Hello again from NodeJS! \n", (err)=>{
    if (err) throw err;
    console.log("File appended successfully")
})

fs.readFile("message.txt",'utf8', (err, data)=>{
    if (err) throw err;
    console.log(data)
})
