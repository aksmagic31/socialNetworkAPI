const { Schema, model } = require('mongoose');
const Thought = model('Thought', thoughtSchema);

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



module.exports = Thought;