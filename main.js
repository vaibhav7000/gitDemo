const fs = require('fs');

function writeFile(data){
    return new Promise(function(resolve,reject){
        fs.writeFile('a.txt',data,function(err){
            if(err){
                reject('error is present');
            } else{
                resolve(true);
            }
        })
    })
}

function readFile(){
    fs.readFile('a.txt','utf-8',function(err,data){
        if(err){
            console.log('error is present');
        } else{
            console.log(data);
        }
    })
}

writeFile('').then(readFile).catch(function(err){
    console.log(err);
})