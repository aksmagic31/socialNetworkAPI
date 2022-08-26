const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// create the thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'Please leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true
    },
    reactions: [{
      type: Schema.Types.ObjectId,
      ref: 'Reaction',
    }],
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;