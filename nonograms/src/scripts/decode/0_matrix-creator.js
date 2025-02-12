const createEmptyMatrix = function (size) {
  let matrix = new Array(size);
  matrix = matrix.fill(null);
  matrix = matrix.map(() => new Array(size).fill(null).map(() =>0));
  return matrix;
};

export default createEmptyMatrix;
