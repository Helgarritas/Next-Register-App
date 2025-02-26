import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: { 
    type: String, 
    unique: true, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user', 'rh'],
  }
},{ collection: 'User' });

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function( doc, ret, options ) {
      delete ret._id;
  },
})
// { 
//   timestamps: true 
// }
export const UserModel = model('User', UserSchema);



