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
        league: {
            type: String,
            enum : ['NFL', 'NBA', 'MLB'],
            require: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Watch || mongoose.model('Watch', watchSchema);

