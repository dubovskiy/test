var fs = require('fs');
var outData = {};

fs.readFile('file4.txt', "utf8", function read(err, data) {
    var row = data.split("\r\n");
    var col, key, value;
    for (var i = 1; i < row.length; i++) {
        col = row[i].split("\t");

        key = col[1];
        value = col[6];
        
        if(key) key = key.replace(/\D+/ig,'');
        if(value) value = value.replace(',','.').replace(/[^\d]/ig,'');

        if(key && value){
            outData[key] = value;
        }
    };
    outData = JSON.stringify(outData);
    fs.writeFile("RRPlist.js", outData); 
});