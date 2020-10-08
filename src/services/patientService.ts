import patients from '../../data/patients';

import { Patient, PatientNoSSN } from '../types';

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

const addPatient = () => {
  return null;
};

export default {
  getPatients,
  getPatientNoSSN,
  addPatient
}