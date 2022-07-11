const memo = () => {
  let cache = {};
  return (value) => {
    console.time();
    console.timeEnd();
    if (value in cache) {
      console.log(cache[value]);
      return cache[value];
    } else {
      newvalue = value;
      cache[value] = newvalue;
      return newvalue;
    }
  };
};

let memoizationvalue = memo();
console.log(memoizationvalue(10));
console.log(memoizationvalue(20));
console.log(memoizationvalue(10));
