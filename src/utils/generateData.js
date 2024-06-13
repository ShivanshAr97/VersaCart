import { faker } from "@faker-js/faker";
import fileContent from "../data/file.json";

const generateFakeUser = () => {
  return {
    id: faker.commerce.isbn(),
    color: faker.color.cmyk(),
    // size:,
    brand: faker.company.name(),
    product: faker.commerce.productName(),
    price: faker.commerce.price(),
    desc: faker.commerce.productDescription(),
    category: faker.commerce.product(),
    fullName: faker.person.firstName(),
    image: faker.image.urlLoremFlickr({ category: "fashion" }),
  };
};

const users = [];

Array(50).forEach(() => {
  users.push(generateFakeUser());
});

fileContent.push(...users);

return users;
