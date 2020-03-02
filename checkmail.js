const {google} = require('googleapis');
var base64 = require('js-base64').Base64;
const cheerio = require('cheerio');
var open = require('open');
var Mailparser = require('mailparser').MailParser;

class Check{

    //auth is the constructor parameter.
    constructor(auth){
        this.me = 'Enter your email id.';
        this.gmail = google.gmail({version: 'v1', auth});
        this.auth = auth;
    }

    //Returns the mails in the user's inbox.
    checkInbox(){
        this.gmail.users.messages.list({
            userId: this.me
        }, (err, res) => {
            if(!err){
                console.log(res.data);
            }
            else{
                console.log(err);
            }
        })
    }
}
