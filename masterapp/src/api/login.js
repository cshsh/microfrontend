import fetch from '../libs/axios'

export const login = (userName, password) => {
  let data = {
    userName,
    password
  };
  // debugger
  return new fetch ({
    url:'admin/login',
    method: 'post',
    data
  })
};
