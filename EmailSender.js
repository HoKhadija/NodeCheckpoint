// require nodemailer module
const nodemailer = require('nodemailer');

// create transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'exemple@gmail.com', // replace with your email
        pass: 'your-password' // replace with your password
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: 'your-email@gmail.com', // sender address
    to: 'recipient-email@gmail.com', // list of receivers
    subject: 'Test email from Solnyshka', // Subject line
    text: 'Hello from Solnyshka!', // plain text body
    html: '<h1>Hello from Solnyshka!</h1><p>I am happy to send you this message</p>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
