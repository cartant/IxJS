import { IterableX } from '../../iterable';
import { concatStatic } from '../../iterable/concat';

function _concat<T>(...args: Iterable<T>[]): IterableX<T> {
  return new IterableX<T>(concatStatic<T>(...args));
}

IterableX.concat = _concat;

declare module '../../iterable' {
  namespace IterableX {
    export let concat: typeof _concat;
  }
}