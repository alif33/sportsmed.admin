import mongoose from 'mongoose';

const podcastSchema = new mongoose.Schema(
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
        description: {
            type: String,
            required: true,
            trim: true
        },
        audioUri: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true
        },
        playersName: {
            type: Array,
        }
    },
    { timestamps: true }
);

export default mongoose.models.Podcast || mongoose.model('Podcast', podcastSchema);

