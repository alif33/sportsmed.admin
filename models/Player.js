import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String
        },
        playerTeam: {
            type: String,
            required: true,
            trim: true
        },
        league: {
            type: String,
            enum : ['NFL', 'NBA', 'MLB']
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
        posts: {
            type: Array
        }
    },
    { timestamps: true }
);

export default mongoose.models.Player || mongoose.model('Player', playerSchema);
