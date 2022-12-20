export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

//if exists data.message return the data in the message field in server.js
//otherwise general message in error obj
