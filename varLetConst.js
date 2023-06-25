// var has function-level scope

function a() {
  let y = 0;
  for (var i = 0; i < 10; i++) {
    y++;
  }

  //i gets hoisted to closest function scope - so even though this console log is not in the for-loop,
  //it is in the same function where i is hoisted so it will print 10
  console.log('i: ', i);
  console.log('y: ', y);
}

a();

//const and let have block level scope

function b() {
  let y = 0;
  for (let i = 0; i < 10; i++) {
    y++;
  }
  console.log('i: ', i); //ReferenceError: i is not defined
  console.log('y: ', y);
}

b();
