const createArr = (length) => {
  const userArr = new Array(length);
  for (let i = 0; i < userArr.length; i++) {
    userArr[i] = prompt('');
  }
  console.log(userArr);
  console.log(
    [...userArr].sort((a, b) => {
      return a - b;
    })
  );
  const del2to4 = userArr.filter((_, idx) => {
    return idx < 2 || idx > 4;
  });
  console.log(del2to4);
};

createArr(9);
