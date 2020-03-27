const {validationResult} = require('express-validator');

const HttpError = require('../models/http-error');

const getWordlist = require('../util/wordlist');

var crypto = require('crypto');

//returns number from 5 dice rolls
function getDiceRoll(){
    const chars = "123456";
    const size = 5;

    var rand = crypto.randomBytes(size);
    var value = new Array(size);
    const d = 256 / chars.length;

    for(var i = 0; i < size; i++) {
        value[i] = chars[Math.floor(rand[i] / d)];
    };
    return value.join('');
}

//return passphrases
function getPassphrase(number){
    var wordlist = getWordlist('./util/eff_large_wordlist.txt');
    var passphrase = new Array();

    for(var i = 0; i < number; i++){
        var diceRoll = getDiceRoll();
        passphrase.push(wordlist[diceRoll]);
    }

    return passphrase.join(' ');
}

//default passphrase without any customisation
const getDefaultPass = (req, res, next) => {
    var passphrases = new Array();
    const size = 5;     //length of passphrase
    const noPassphrases = 4;        //how many passphrases to generate

    var passphrase = '';
    for(var i = 0; i < noPassphrases; i++)
    {
        passphrase = getPassphrase(size);
        passphrases.push(passphrase);
    }
    res.json({passphrase: passphrases});
};

exports.getDefaultPass = getDefaultPass;