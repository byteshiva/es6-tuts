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
