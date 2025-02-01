import fs from 'fs';
// Asynchronous write file
for(let i=0;i<1000;i++){
    fs.appendFileSync("./test.txt", `Hello, world! ${i}\n`);}

//Sync write file
// fs.writeFileSync("./test.txt", 'Hello, async world!', (err)=>{console.log("Error in file write")});

// const result=fs.readFileSync("./test.txt", 'utf8');
// console.log(result);

fs.readFile("./test.txt", 'utf8', (err, data)=>{
    if(err)
        console.log("Error : ",err);
    else
    console.log(data);
});

for(let i=0;i<1000;i++){
    console.log(i);
}