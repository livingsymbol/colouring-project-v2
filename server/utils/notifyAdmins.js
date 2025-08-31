import User from "../models/User.js";
import sendEmail from "./sendEmail.js";

const notifyAdmins = async (subject, message) => {
    const admins = await User.find({ role: "admin", notificationsEnabled: true });

    const emails = admins.map(admin => admin.email).filter(Boolean);
    if (!emails.length) return;

    await sendEmail(
        emails,
        subject,
        `<p>${message}</p>`
    );
};

export default notifyAdmins;