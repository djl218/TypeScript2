import express from 'express';
import patientService from '../services/patientService';
import { toNewPatient } from '../utils/patientUtil';
import {
  toNewHospitalEntry,
  toNewOccupationalHealthcareEntry,
  toNewHealthyCheckEntry
 } from '../utils/entryUtil';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPublicPatient());
});

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);

    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get('/:id', (req, res) => {
  const patient = patientService.findById(req.params.id);

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

router.post('/:id/entries', (req, res) => {
  try {
    if (req.body.type === "Hospital") {
      const newEntry = toNewHospitalEntry(req.body);
      const addedEntry = patientService.addEntry(req.params.id, newEntry)
      res.json(addedEntry);
    } else if (req.body.type === "OccupationalHealthcare") {
      const newEntry = toNewOccupationalHealthcareEntry(req.body);
      const addedEntry = patientService.addEntry(req.params.id, newEntry)
      res.json(addedEntry);
    } else if (req.body.type === "HealthCheck") {
      const newEntry = toNewHealthyCheckEntry(req.body);
      const addedEntry = patientService.addEntry(req.params.id, newEntry)
      res.json(addedEntry);
    } else {
      res.status(400).send("Submitted entry does not have type.")
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;