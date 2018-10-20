const names = ["John", "Joe", "Mary"];

const reducer = (accum, element) => {
  accum += element.length;
  return accum;
};

const lengthOfNames = names.reduce(reducer, 0);
console.log(lengthOfNames);
