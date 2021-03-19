const csvFilePath='./csv/nodejs-hw1-ex1.csv';
const csv=require('csvtojson');
const { Transform  } = require('stream');
const fs = require('fs');

const transformData = (chunk) => {
    let data = {};
    let json = JSON.parse(chunk);
    delete json['Amount'];
    for(let key in json){
        data[key.toLowerCase()] = json[key];
    }
    return JSON.stringify(data) + "\n";
}

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(transformData(chunk.toString()));
        callback();
    }
});

const readStream=fs.createReadStream(csvFilePath);

const writeStream=fs.createWriteStream("test.txt");

readStream.pipe(csv()).pipe(transformStream).pipe(writeStream);
