import { regexFromString } from './regexFromString';

export interface Validator<A> {
  validate: (x: A) => boolean;
  errorMessage?: string;
}

export const defaultValidator: Validator<any> = {
  validate: (_x: any) => true,
  errorMessage: 'You must enter a valid input params'
}

export const defaultIsSubmitValidator: Validator<any> = {
  validate: (_x: any) => false,
  errorMessage: 'You must enter a valid input params'
}

export const getValidator = (pattern: string) => {
  return {
    validate: (value: string) => {
      const validationRegExp = regexFromString(pattern)
      return !!validationRegExp.test(value)
    },
    errorMessage: 'You must enter a valid input params'
  }
}
