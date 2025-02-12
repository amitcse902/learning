// Polyfill Promise All
Promise.myAll = function (promiseList) {
  const result = [];
  promiseList.forEach((promise) => {
    promise()
      .then((data) => {
        result.push(data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  });

  if (promiseList.length === result.length) {
    return Promise.resolve(result);
  }
};
