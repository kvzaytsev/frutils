export const curry_n = (fn, arity) => {
  const inner = (...argsAccumulator) => (...args) => {
    const stepArguments = argsAccumulator.concat(args),
      next = stepArguments.length < arity ? inner : fn;
    return next(...stepArguments);
  }
  return inner();
}

export const curry = (fn) => curry_n(fn, fn.length);
export default curry;