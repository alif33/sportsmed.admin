import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        league: {
            type: String,
            enum : ['NFL', 'NBA', 'MLB'],
            required: true,
        },
        playersName: {
            type: Array,
            required: true
        },
        tags: {
            type: Array,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', postSchema);