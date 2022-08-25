const { Schema, model } = require('mongoose');

// create the Thought Schema 


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'Please Leave a Thought!',
      minlength: 1,
      maxlength: 300
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true
    },
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