const request = require('request-promise-native');

const productInfo = function(input) {

  typeID = 4;
  productArr = [];

  query = `https://serpapi.com/search.json?engine=walmart&api_key=${process.env.PRODUCTS_API_KEY}&query=`;
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
    .catch((err) => console.log(err));
};

module.exports = productInfo;
