function add(first, second) {
  return first + second;
};

function multiply(first, second) {
  return first * second
};

add(777, multiply(36325, 9824));

function areArraysSame(array1, array2) {
  if (array1.length !== array2.length)
    return false;
  for (var i = array1.length; i--;) {
    if (array1[i] !== array2[i])
    return false;
  }
  return true;
};

areArraysSame([1,2,3], [4,5,6])
