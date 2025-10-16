import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Sender is required"]
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Sender is required"]
    },
    status: {
        type: Boolean,
        default: false,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true,
        required: true
    }

})

const requestModel = mongoose.model(requestSchema, "Request");

export default requestModel;
