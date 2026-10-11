import mongoose from "mongoose"

const emailOtpSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            index: true,
        },
        purpose: {
            type: String,
            enum: ['registration', 'bookink'],
        },
        codeHash: {
            type: String,
            required: true,
        },
        attempts: {
            type: Number,
            default: 0,
        },
        expireAt: {
            type: Date,
            required: true,
            index: {expires: 0},
        },
        consumeAt: {
            type: Date,
            default: null,
        },
    },
    {timestamps: 0}
);

const emailOtp = mongoose.model('EmailOtp', emailOtpSchema);

export default emailOtp;