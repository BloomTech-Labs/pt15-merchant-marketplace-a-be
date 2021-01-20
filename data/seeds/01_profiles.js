const faker = require('faker');

const profiles = [...new Array(5)].map((i, idx) => ({
  okta_id: idx === 0 ? '00ulthapbErVUwVJy4x6' : faker.random.alphaNumeric(20),
  avatarUrl: faker.image.avatar(),
  email: idx === 0 ? 'llama001@maildrop.cc"' : faker.internet.email(),
  name:
    idx === 0
      ? 'Test001 User'
      : `${faker.name.firstName()} ${faker.name.lastName()}`,
  merchant: idx === 0 && true,
}));

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('profiles').insert(profiles);
};
