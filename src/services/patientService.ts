import patients from '../../data/patients';
import { v4 as uuidv4 } from 'uuid';

import { Patient, PatientNoSSN, NewPatient } from '../types';

const getPatients = (): Array<Patient> => {
  return patients;
};

const getPatientNoSSN = (): PatientNoSSN[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = ( patient: NewPatient ): Patient => {
  const newPatientEntry = {
    id: uuidv4(),
    ...patient
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  getPatientNoSSN,
  addPatient
};