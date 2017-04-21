import _ from 'lodash';

export const groupBy = (data, keys, reduce) => {
  const key = _.head(keys);
  keys = _.tail(keys);

  if (key) {
    data = _.groupBy(data, key);
    _.forEach(Object.keys(data), (k) => {
      data[k] = groupBy(data[k], keys, reduce);
    });
  } else if (reduce) {
    data = reduce(data);
  }
  return data;
};
