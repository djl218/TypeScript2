import { NewPatient, Gender, Entry } from './types';

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing comment: ' + name);
  }

  return name;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDateOfBirth = (dateOfBirth: any): string => {
  if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error('Incorrect of missing date: ' + dateOfBirth);
  }
  return dateOfBirth;
};

const parseSSN = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing comment: ' + name);
  }
  return name;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect of missing weather: ' + gender)
  }
  return gender;
};

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing comment: ' + occupation);
  }
  return occupation;
};

const isArray = (param: any): param is Entry => {
  return param instanceof Array;
};

const parseEntries = (entries: any): Entry[] => {
  if (!entries || !isArray(entries)) {
    throw new Error('Incorrect or missing comment: ' + entries);
  }
  return entries as Entry[];
}

const toNewPatient = (object: any): NewPatient => {
  return {
    name: parseName(object.name),
    dateOfBirth: parseDateOfBirth(object.dateOfBirth),
    ssn: parseSSN(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
    entries: parseEntries(object.entries)
  };
};

export default toNewPatient;