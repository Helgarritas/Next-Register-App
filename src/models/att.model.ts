import { Schema, model } from "mongoose";

const AttSchema = new Schema({
  empId: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  verfied: {
    required: true,
  }
},{ collection: 'Att' });

AttSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function( doc, ret, options ) {
    delete ret._id;
  },
})
// { 
//   timestamps: true 
// }
export const AttModel = model('User', AttSchema);



