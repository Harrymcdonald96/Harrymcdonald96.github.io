import express, { urlencoded, json } from 'express';
import { createTransport } from 'nodemailer';
const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.post('/send-email', (req, res) => {
    // Retrieve form data from request body
    const { name, email, message } = req.body;

    // Create transporter object using nodemailer
    const transporter = createTransport({
        service: 'gmail', // Example: 'gmail'
        auth: {
            user: 'harryquirk1996@gmail.com',
            pass: 'wmai btye ynnt fmmk'
        }
    });

    // Define email options
    const mailOptions = {
        from: 'harryquirk1996@gmail.com',
        to: 'harryquirk1996@gmail.com',
        subject: 'New Message from Portfolio Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

