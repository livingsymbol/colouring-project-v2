import User from '../models/User.js';
import { hashPassword, comparePassword, generateToken } from '../utils/auth.utils.js';

const USE_CREDENTIAL_AUTH = process.env.USE_CREDENTIAL_AUTH === 'true';

//TODO remove fields password, createdAt, updatedAt, __v from response body

// Guest login (if allowed)
export const guestLogin = async (req, res) => {
    if (USE_CREDENTIAL_AUTH) {
        return res.status(403).json({ message: 'Guest login disabled.' });
    }

    const randomInt = Math.floor(Math.random() * 100000);
    const guest = new User({
        username: `Anonymous-${randomInt}`,
        role: 'guest'
    });

    await guest.save();
    const token = generateToken(guest);
    res.json({ token, user: guest });
};

// Admin login (credentials)
export const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    const admin = await User.findOne({ email });

    if (!admin || !admin.password) return res.status(401).json({ message: 'Invalid credentials.' });

    const isMatch = await comparePassword(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials.' });

    const token = generateToken(admin);
    res.json({ token, user: admin });
};

// User login (credentials)
export const credentialLogin = async (req, res) => {
    if (!USE_CREDENTIAL_AUTH) {
        return res.status(403).json({ message: 'Credential login disabled.' });
    }

    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !user.password) return res.status(401).json({ message: 'Invalid credentials.' });

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials.' });

    const token = generateToken(user);
    res.json({ token, user });
};

// Register (admin or user)
export const register = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists.' });
        }

        const hashed = await hashPassword(password);
        const user = new User({ username, email, password: hashed, role });
        await user.save();

        const token = generateToken(user);
        res.status(201).json({ token, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error during registration.' });
    }
};
