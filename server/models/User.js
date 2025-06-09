import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: function () { return this.role !== 'guest'; } },
    role: { type: String, enum: ['guest', 'user', 'admin'], default: 'guest' },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
