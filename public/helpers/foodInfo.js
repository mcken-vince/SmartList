const request = require('request-promise-native');

const foodInfo = function(input) {

  const foodArr = [];

  query = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=4523f0dd2bf7428899992a676ad63136&query=';
  request(query + input)
    .then(body1 => {

      // Similar to movies, this request only gives us id and image of the recipe.
      // We need to retrieve the recipe summary from the 2nd request.

      const response1 = JSON.parse(body1);
      const item = response1['results'][0];

      const id = item['id'];
      const recipeName = item['title'];
      const recipePic = item['image'];

      foodArr.push(recipeName);
      foodArr.push(recipePic);

      const descriptionQuery = 'https://api.spoonacular.com/recipes/' + id.toString();
      const access = '/information?apiKey=4523f0dd2bf7428899992a676ad63136';
      return request(descriptionQuery + access);
    })
    .then(body2 => {
      // Parse the second response, and get the recipe description... in HTML!
      const response2 = JSON.parse(body2);
      const detail = response2['summary'];

      foodArr.push(detail);
      console.log(foodArr);
      return foodArr;
    })
    .catch(err => {
      console.log(err)
    });
};

foodInfo(process.argv[2]);
