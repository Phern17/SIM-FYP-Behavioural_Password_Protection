const fs = require('fs');

function getWordlist(fileName){
    var dict = {};

    var data = fs.readFileSync(fileName, 'utf8');
    var lines = data.split('\n');
    lines.map(function(item){
        var tabs = item.split('\t');
        dict[tabs[0]] = tabs[1];
    });

    return dict;
} 

module.exports = getWordlist;