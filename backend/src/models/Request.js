import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Sender is required"]
    },
    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Sender is required"]
    },
    status: {
        type: String,
        default: false,
        enum: ["Pending", "Accepted"],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true,
        required: true
    }

})

const model = mongoose.model("Request", requestSchema);

export default model;
