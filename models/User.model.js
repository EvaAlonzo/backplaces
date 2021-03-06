const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    _ownerFavs: [{ type: Schema.Types.ObjectId, ref:"Favorites"}],
    username: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profile_pic: {
      type: String,
      default: "https://res.cloudinary.com/evaalonzo/image/upload/v1648162745/UserDefaullt_tgpmio.png",
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
