const { User } = require('../models');

const userData = [
    {
      "username": "Sal",
      "password": "password12S"
    },
    {
      "username": "Lernantino",
      "password": "password12L"
    },
    {
      "username": "Amiko",
      "password": "password12A"
    },
    {
      "username": "Jordan",
      "password": "password12J"
    },
    {
      "username": "Blake",
      "password": "password12B"
    }
  ];

  const seedUser = () => User.bulkCreate(userData);

  module.exports = seedUser;
  