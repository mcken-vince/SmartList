const request = require('request-promise-native');

const bookInfo = function(input) {

  bookArr = [];

  query = 'https://www.googleapis.com/books/v1/volumes?q='
  request(query + input)
    .then(body => {

      const response = JSON.parse(body);
      const item = response['items'][0]['volumeInfo'];

      const title = item['title'];
      const author = item['authors'].join(', ');
      const image = item['imageLinks']['thumbnail'];
      const description = item['description'];

      bookArr.push(title, image, description);
      console.log(bookArr);
      return bookArr;
    })
    .catch(err => {
      console.log(err)
    });
};


bookInfo(process.argv[2]);
