function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: 'Mia' }, { age: 30 });
// const merged = merge({ id: 'PI-480' }, { size: 1230 });

// console.log(merged);

export { merged };