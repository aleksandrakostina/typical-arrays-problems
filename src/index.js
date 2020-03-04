
exports.min = function min (array) {
  if (array)
    return array.reduce(function (acc, cur){ return Math.min(acc, cur)}, 0);
  else
    return 0;
}

exports.max = function max (array) {
  if (array)
  return array.reduce(function (acc, cur){ return Math.max(acc, cur)}, 0);
else
  return 0;
}

exports.avg = function avg (array) {
  if (array)
  return array.reduce(function (acc, cur, index){ acc += cur; if(index == array.length-1) return acc/array.length
  else return acc}, 0);
else
  return 0;
}
