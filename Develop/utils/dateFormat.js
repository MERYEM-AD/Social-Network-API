
const dateFormat = (Currentdate) => {
    const date = new Date(Currentdate);
    return date.toLocaleDateString();
  }; 

  module.exports = dateFormat;