import {
  NewHospitalEntry,
  NewOccupationalHealthcareEntry,
  NewHealthyCheckEntry,
  HealthCheckRating 
} from '../types';

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseDescription = (description: any): string => {
  if (!description || !isString(description)) {
    throw new Error('Incorrect or missing comment: ' + description);
  }
  return description;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect of missing date: ' + date);
  }
  return date;
};

const parseSpecialist = (specialist: any): string => {
  if (!specialist || !isString(specialist)) {
    throw new Error('Incorrect or missing comment: ' + specialist);
  }
  return specialist;
};

const parseHospitalType = (type: any): "Hospital" => {
  if (type !== "Hospital") {
    throw new Error('Incorrect or missing comment: ' + type);
  }
  return type;
};

const parseOccupationalHealthcareType = (type: any): "OccupationalHealthcare" => {
  if (type !==  "OccupationalHealthcare") {
    throw new Error('Incorrect or missing comment: ' + type);
  }
  return type;
};


const parseHealthyCheckType = (type: any): "HealthCheck" => {
  if (type !== "HealthCheck") {
    throw new Error('Incorrect or missing comment: ' + type);
  }
  return type;
};

const parseDischarge = (discharge: any): { date: string, criteria: string } => {
  if (!discharge.date || !isString(discharge.date) || !isDate(discharge.date)
    || !discharge.criteria || !isString(discharge.criteria)) {
    throw new Error('Incorrect or missing comment: ' + discharge)
  }
  return discharge;
};

const parseEmployerName = (employerName: any): string => {
  if (!employerName || !isString(employerName)) {
    throw new Error('Incorrect or missing comment: ' + employerName);
  }
  return employerName;
};

const isHealthCheckRating = (param: any): param is HealthCheckRating => {
  return Object.values(HealthCheckRating).includes(param);
};

const parseHealthCheckRating = (healthCheckRating: any): HealthCheckRating => {
  if (!healthCheckRating || !isHealthCheckRating(healthCheckRating)) {
    throw new Error('Incorrect of missing comment: ' + healthCheckRating)
  }
  return healthCheckRating;
};

export const toNewHospitalEntry = (object: any): NewHospitalEntry => {
  return {
    description: parseDescription(object.description),
    date: parseDate(object.date),
    specialist: parseSpecialist(object.specialist),
    type: parseHospitalType(object.type),
    discharge: parseDischarge(object.discharge)
  };
};

export const toNewOccupationalHealthcareEntry = (object: any): NewOccupationalHealthcareEntry => {
  return {
    description: parseDescription(object.description),
    date: parseDate(object.date),
    specialist: parseSpecialist(object.specialist),
    type: parseOccupationalHealthcareType(object.type),
    employerName: parseEmployerName(object.employerName),
  };
};

export const toNewHealthyCheckEntry = (object: any): NewHealthyCheckEntry => {
  return {
    description: parseDescription(object.description),
    date: parseDate(object.date),
    specialist: parseSpecialist(object.specialist),
    type: parseHealthyCheckType(object.type),
    healthCheckRating: parseHealthCheckRating(object.healthCheckRating)
  };
};