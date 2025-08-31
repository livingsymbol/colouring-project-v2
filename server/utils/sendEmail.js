import { createTransport } from 'nodemailer';

const sendEmail = async ({ to, subject, html }) => {
    const transporter = createTransport({
        service: 'gmail', // or use SendGrid, Mailgun, etc.
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Colouring Project " <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
        });
    } catch (error) {
        console.error("Email send error:", error);
    }
};

export default sendEmail;
