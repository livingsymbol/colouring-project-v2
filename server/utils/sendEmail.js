import { createTransport } from 'nodemailer';

const sendEmail = async ({ to, subject, text }) => {
    const transporter = createTransport({
        service: 'gmail', // or use SendGrid, Mailgun, etc.
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: `"Forum App" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text,
    });
};

export default sendEmail;
