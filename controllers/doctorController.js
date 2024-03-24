import DoctorModel from "../models/Doctor.js";

export const saveDoctors = async (doctorsData) => {
  try {
    if (!Array.isArray(doctorsData)) {
      throw new Error("Invalid data format. Expected an array.");
    }
    await DoctorModel.insertMany(doctorsData);
  } catch (error) {
    throw error;
  }
};

export const getAllDoctors = async () => {
  try {
    const doctors = await DoctorModel.find();
    return doctors;
  } catch (error) {
    throw error;
  }
};

export const getDoctorsByCity = async (city) => {
  try {
    const sanitizedCity = city.replace(/\s/g, "");
    const regex = new RegExp(sanitizedCity, "i");

    const doctors = await DoctorModel.find({ city: { $regex: regex } });
    return doctors;
  } catch (error) {
    throw error;
  }
};
