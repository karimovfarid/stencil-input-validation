import { regexFromString } from './regexFromString';
import { Validator } from '../interfaces/validator';

export const defaultValidator: Validator<string> = {
  validate: (_x: any) => true,
}

export const getValidator = (pattern: string) => {
  return {
    validate: (value: string) => {
      const validationRegExp = regexFromString(pattern)
      return !!validationRegExp.test(value)
    },
  }
}
