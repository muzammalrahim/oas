export default function setupAxios(axios, store) {
  axios.interceptors.request.use(
    config => {
      const {
        auth: { token }
      } = store.getState();

      console.log('token', token);

      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }

      return config;
    },
    err => Promise.reject(err)
  );

  axios.interceptors.response.use(function (response) {
      return response;
  }, function (error) {
      if (error.response.status === 401) {
        localStorage.removeItem('persist:demo3-auth');
        window.location.assign('/admin/auth/login');
      }

      return Promise.reject(error);
  });
}
