import { Router } from "express";
import {
  saveDoctors,
  getAllDoctors,
  getDoctorsByCity,
} from "../controllers/doctorController.js";

const router = Router();

router.post("/saveDoctors", async (req, res) => {
  try {
    // Hardcoded data for testing
    const doctorsData = [
      { name: "John Doe", specialization: "Cardiologist" },
      { name: "Jane Smith", specialization: "Pediatrician" }
      // Add more doctor objects as needed
    ];

    // Save the hardcoded data to MongoDB
    await saveDoctors(doctorsData);

    // Send a success response
    res.status(201).json({ message: "Doctors data saved successfully" });
  } catch (error) {
    // If an error occurs, send an error response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/getAllDoctors", async (req, res) => {
  try {
    const doctors = await getAllDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getDoctorsByCity", async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ error: "City parameter is required" });
    }

    const doctors = await getDoctorsByCity(city);
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
