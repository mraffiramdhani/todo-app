import axios from 'axios';

export const GetItem = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      baseURL: 'https://date.nager.at/api/v2/',
      url: 'PublicHolidays/2019/US',
      headers: {
        Accept: 'application/json',
        common: {
          'Content-Type': 'application/json',
        },
      },
      responseType: 'json',
    })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};
