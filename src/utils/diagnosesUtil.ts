import { Diagnosis } from '../types';

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing comment: ' + name);
  }
  return name;
};

const parseCode = (code: any): string => {
  if (!code || !isString(code)) {
    throw new Error('Incorrect or missing comment: ' + code);
  }
  return code;
};

const parseLatin = (latin: any): string => {
  if (latin || isString || latin === undefined) {
    return latin;
  } else {
    throw new Error('Incorrect or missing comment: ' + latin);
  }
};

export const toDiagnosis = (object: any): Diagnosis => {
  return {
    code: parseCode(object.code),
    name: parseName(object.name),
    latin: parseLatin(object.latin)
  };
};

export default toDiagnosis;