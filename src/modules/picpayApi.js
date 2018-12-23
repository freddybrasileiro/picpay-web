import axios from "axios";

export default axios.create({
  baseURL: "http://careers.picpay.com/tests/mobdev/",
  timeout: 6000,
  validateStatus: function(status) {
    return (
      (status >= 200 && status <= 299) ||
      (status >= 400 && status <= 499) || //BAD_REQUESTS
      (status >= 500 && status <= 599) //SERVER_ERROR
    );
  }
});
