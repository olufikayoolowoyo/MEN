import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({

   name :{ type : String, required : 'Enter User Name'},
   email :{ type : String, required : 'Enter User Email'},   
   age :{ type : Number},
   created_date :{ type : Date, default : Date.now},
})