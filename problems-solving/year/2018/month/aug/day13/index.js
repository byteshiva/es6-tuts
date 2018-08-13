//Solution using array.map()
function getResultUsingArrayMap() {
  let result = data.map(function(value, index) {
    let pos = parseInt(index) + parseInt(d - 1);
    if (pos > n-1) {
      pos = pos - n;
    }
    return data[pos];
  });

  return result;
}


// Array LEft Rotation using Array Shift

function getResultsUsingArrayShift() {
  let temp = data.splice(0);
  for (let i=0; i<d-1; i++) {
    let first = temp.shift();
    temp.push(first);
  }
  return temp;
}
