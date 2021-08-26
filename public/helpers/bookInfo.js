const request = require('request-promise-native');

const bookInfo = function(input) {

  const typeID = 2;
  bookArr = [];

  query = 'https://www.googleapis.com/books/v1/volumes?q='
  return request(query + input)
    .then(body => {

      const response = JSON.parse(body);
      const item = response['items'][0]['volumeInfo'];

      // const title = item['title'];
      const image = item['imageLinks']['thumbnail'];
      const description = item['description'];
      const infoLink = item['infoLink'];

      bookArr.push(input, image, infoLink, description, typeID);
      return bookArr;
    })
    .catch(err => {
      return (err);
    });
};


module.exports = bookInfo;
