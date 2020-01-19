const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: 0,
    },
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: 0,
    },
  ],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  genres: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
  visits: {
    type: Number,
    default: 0,
  },
  imageUrl: String,
});

movieSchema.set('toJSON', { 
  transform: (doc, ret) => ({ ...ret, likes: ret.likes.length, dislikes: ret.dislikes.length }),
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
