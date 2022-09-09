import mongoose from 'mongoose';

const watchSchema = new mongoose.Schema(
    {
        videoId: {
            type: String,
            required: true,
            trim: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String
        },
        league: {
            type: String,
            enum : ['NFL', 'NBA', 'MLB'],
            require: true
        },
        playersName: {
            type: Array
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        views: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

export default mongoose.models.Watch || mongoose.model('Watch', watchSchema);

