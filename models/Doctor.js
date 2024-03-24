import { Schema, model } from "mongoose";

const doctorSchema = new Schema({
  id: Number,
  name: String,
  expertise: String,
  city: String,
  imageSrc: String,
});

const DoctorModel = model("Doctor", doctorSchema);

export default DoctorModel;
