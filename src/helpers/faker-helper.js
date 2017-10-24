const faker = require('faker');

export const getRandomImage = () => {
  return faker.image.image();
}

export const getRandomName = () => {
  return faker.name.findName();
}

export const getRandomCity = () => {
  return faker.address.city();
}