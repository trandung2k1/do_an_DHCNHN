const nodemailer = require('nodemailer');

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        // host: process.env.SMPT_HOST,
        // port: process.env.SMPT_PORT,
        // service: process.env.SMPT_SERVICE,
        // auth:{
        //     user: process.env.SMPT_MAIL,
        //     pass: process.env.SMPT_PASSWORD,
        // },
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
