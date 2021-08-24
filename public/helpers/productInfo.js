const request = require('request-promise-native');

const productInfo = function(input) {

  typeID = 4;
  productArr = [];

  query = 'https://serpapi.com/search.json?engine=walmart&api_key=5f02079b3f94957dd56fa4e3411d127c6f3ae64940c0b01361d21bfac0b56f0b&query=';
  return request(query + input)
    .then(body => {
      const response = JSON.parse(body);
      const item = response['organic_results'][0];

      const imageLink = item['thumbnail'];
      const description = item['description'];
      const productLink = response['walmart_url'];

      productArr.push(input, imageLink, productLink, description, typeID);
      console.log(productArr);

      return productArr;
    })
};

module.exports = productInfo;
