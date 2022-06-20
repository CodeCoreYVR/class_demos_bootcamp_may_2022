const knex = require('./client');

knex('posts').insert({
  title: 'our first post',
  content: 'Inserting records using Knexjs',
  imageUrl: 'http://google.ca'
}).then((n) => {
  console.log('inserted into posts:', n);
  knex.destroy()
}).catch((err) => {
  console.log(err);
})