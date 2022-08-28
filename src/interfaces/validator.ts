export interface Validator<A> {
  validate: (x: A) => boolean;
}
