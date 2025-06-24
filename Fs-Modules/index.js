console.log('Loading Fs-Modules...');
console.log('Loading Fs-Modules... done!');

// const { log } = require("console");
const fs = require("fs");
 
// fs.readFile("input.txt",'utf-8',(data,err)=>{
//            if(err) throw err;
    
    
//             console.log(data);
    
//     })
    // ! Read file in fs module 


    // const data=fs.readFileSync("input.txt",'utf-8');
    // console.log(data);

// writing file in fs module 

// const data1=fs.writeFileSync("input.txt","hanji janab kay hal ha  o yar purana data jknha  gay ha  ");
// console.log(data1)


// read the fs module data 

// const readstrem = fs.createReadStream("input.txt","utf-8");
// readstrem.on("data",(chunk)=>{
//     console.log(chunk);
// });
// readstrem.on("end",()=>{
//   console.log("reading complete !");
// });


// write the data in fs module in advance leval 

// const writestreem = fs.createWriteStream("input.txt","utf-8");
// writestreem.write("hello yar ma new text hu kay ap muja accept karo ga jannnnnn !");




// data tarnsformation form one file to another file 

const readstrem=fs.createReadStream("input.txt","utf-8");
const writestreem1=fs.createWriteStream("output1.txt","utf-8");
const writestreem2=fs.createWriteStream("output2.txt","utf-8");
const writestreem3=fs.createWriteStream("output3.txt","utf-8");

readstrem.pipe(writestreem1);
readstrem.pipe(writestreem2);
readstrem.pipe(writestreem3);