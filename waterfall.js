function asyncAddOne(x, callBack) {
  setTimeout(() => callBack(x + 1), 200);
}

function asyncDouble(x, callBack) {
  setTimeout(() => callBack(x * 2), 200);
}

function asyncTimesTen(x, callBack) {
  setTimeout(() => callBack(x * 10), 200);
}

/* The waterfall function takes three arguments:

  An initial argument, this is passed into the first async function in the waterfall.

  The second argument is an array of functions, each function takes two arguments. The first argument it uses to find a result and the second is a callback function.

  A final callback is given as the third argument. This is called after the waterfall has invoked all of the functions in the array. 
*/

//  Create this function!
function waterfall(arg, tasks, cb) {
  cb(null);
}

// Tests
waterfall(3, [asyncAddOne, asyncDouble, asyncTimesTen], result => {
  if (result !== 80) {
    console.log('test 1 failed, expected 80 but got', result);
  } else {
    console.log('Test 1 passed!');
  }
});

waterfall(10, [asyncTimesTen, asyncAddOne, asyncDouble], result => {
  if (result !== 202) {
    console.log('test 2 failed, expected 202 but got', result);
  } else {
    console.log('Test 2 passed!');
  }
});
