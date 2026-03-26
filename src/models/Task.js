import mongoose from "mongoose";

// Create Task schema
// Fields:
// - title (String, required)
// - description (String)
// - completed (Boolean, default false)
// - owner (ObjectId, ref "User", required)
// - createdAt (default Date.now)

const taskSchema = new mongoose.Schema({
<<<<<<< HEAD
  title: {
    type: String,
    required: [true, "Please provide a task title"],
  },
  description: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
=======
  
>>>>>>> b6d061e9c6f846a82f37bf80b1e8d83ef043e315
});

const Task = mongoose.model("Task", taskSchema);

<<<<<<< HEAD
export default Task;
=======
export default Task;
>>>>>>> b6d061e9c6f846a82f37bf80b1e8d83ef043e315
