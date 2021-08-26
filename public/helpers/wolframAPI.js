const request = require('request-promise-native');


const typeResponse = function(input) {

  query = 'https://www.wolframalpha.com/queryrecognizer/query.jsp?appid=DEMO&mode=Default&output=json&i=What is '
  return request(query + input)
    .then(body => {

      // We're interested in the value of "domain"
      const response = JSON.parse(body);
      const type = response['query'][0]['domain'];
      const altTypeArr = response['query'][0]['subresults'];
      let altType = undefined;

      // This will only fire if the subresult keyval exists
      if (altTypeArr) {
        altType = altTypeArr[0]['domain'];
      }

      // The domain tells us what the input was:
      // movies, foods, books, or otherwise.
      return [type, altType];
    })
    .catch(err => {
      return (err);
    });
};

module.exports = typeResponse;
