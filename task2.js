const csvFilePath='./csv/nodejs-hw1-ex1.csv';
const csv=require('csvtojson');
const fs = require('fs');

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const jsonData = jsonObj.map(json => {
        let data = {}
        delete json['Amount'];
        for(let key in json){
            data[key.toLowerCase()] = json[key];
        }
        return JSON.stringify(data);
    }).join('\n');
    fs.writeFile("test.txt", jsonData, function(err) {
        if (err) {
            console.log(err);
        }
    });
})
.catch(error => {
    console.log(error);
});