function *generatorFunction() {
  console.log('Generator function running');

  let x = 5;
  yield x;
  
  x++;
  y = yeild x;
  return x;
}

let iterator = generatorFunction();

console.log('All done!');