import { instance } from './instance';

export const loginFunc = (email: string, pwd: string) => {
  return instance
    .get(`users?login=${email}&password=${pwd}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
