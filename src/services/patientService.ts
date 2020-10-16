import patients from '../../data/patients';
import { v4 as uuidv4 } from 'uuid';

import {
  Patient,
  PublicPatient,
  NewPatient,
  NewHospitalEntry,
  NewOccupationalHealthcareEntry,
  NewHealthyCheckEntry
} from '../types';

const getPatients = (): Array<Patient> => {
  return patients;
};

const getPublicPatient = (): PublicPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatientEntry = {
    id: uuidv4(),
    ...patient
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

const findById = (id: string): Patient | undefined => {
  const patient = patients.find(patient => patient.id === id);

  return patient;
};

const addEntry = 
  (id: string, entry: NewHospitalEntry | NewOccupationalHealthcareEntry | NewHealthyCheckEntry): 
  Patient | undefined => {
  const foundPatient: Patient | undefined = findById(id);
  const newEntry  ={
    id: uuidv4(),
    ...entry
  }

  foundPatient!.entries.push(newEntry);
  return foundPatient;
}

export default {
  getPatients,
  getPublicPatient,
  addPatient,
  findById,
  addEntry
};