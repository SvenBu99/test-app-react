const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "testomesto41@gmail.com",
        pass: "testuserATU15"
    }
});

const options = {
    from: "testomesto41@gmail.com",
    to: "luca.nicol2@gmx.de",
    subject: "Sending a dickpic",
    text: "Wow das ist aber ein großer"
};

transporter.sendMail(options, function( err, info){
    if(err){
        console.log(err);
        return;
    }
    console.log("Sent: "+info.response);
})