async function getData() {

  let rawData = await MethodThatReturnsPromise();

  return JSON.parse(rawData);

}

//await pauses function while it waits for method to return
//can only use await infront of functions that returns promise
//unwraps promise and assigns to varaible

//rawData is wrapped in a promise and returned
//code that calls getData handles with .then and .catch