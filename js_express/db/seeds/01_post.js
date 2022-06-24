/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// allows us to use the faker library
const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts')
    .del()
    .then(function () {
      // Insert seed entries
      // generate an array of 1000 posts using faker
      const posts = Array.from({length: 1000}).map(() => {
        return {
          title: faker.company.catchPhrase(),
          content: faker.lorem.paragraph(),
          image_url: faker.image.imageUrl(),
          view_count: Math.floor(Math.random() * 100),
          created_at: faker.date.past()
        }
      })
      //insert seed entries
      // Inside of callback passed to the function
      // Always return knex query that you create
      return knex('posts').insert(posts)
    })
};
