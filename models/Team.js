import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        league: {
            type: String,
            enum : ['NFL', 'NBA', 'MLB']
        },
        image: {
            type: String,
        },
        players: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Player'
        }],
        description: {
            type: String,
            // required: true,
            // trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Team || mongoose.model('Team', teamSchema);
