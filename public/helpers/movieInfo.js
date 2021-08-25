const request = require('request-promise-native');

const movieInfo = function(input) {

  const typeID = 1;
  const movieArr = [];

  query = `https://imdb-api.com/en/API/SearchMovie/${process.env.MOVIES_API_KEY}/`
  return request(query + input)
    .then(body1 => {

      // We want to get: Moive id, description from IMDb, and images.
      const response1 = JSON.parse(body1);
      const item = response1['results'][0];

      // We need the movie ID to retrieve movie description...
      const id = item['id'];

      // The description below grabs the year of the release, not the actual description...
      // const officialTitle = item['title'] + ' ' + item['description'];
      const imageLink = item['image'];
      const fullLink = 'https://www.imdb.com/title/' + id

      movieArr.push(input, imageLink, fullLink);

      // Using the id we just obtained, make another request to get description.
      const descriptionQuery = `https://imdb-api.com/en/API/Title/${process.env.MOVIES_API_KEY}/`;
      return request(descriptionQuery + id);
    })
    .then(body2 => {

      // Parse the second response, and get the movie plot...
      const response2 = JSON.parse(body2);
      const plot = response2['plot'];

      movieArr.push(plot);
      movieArr.push(typeID);

      // console.log(movieArr);
      return movieArr;
    })
    .catch(err => {
      console.log(err)
    });
};

module.exports = movieInfo;
