import { VegetableJsonDAO } from '../dao/VegetableJsonDAO';

const vegetableJsonDAO = new VegetableJsonDAO();

console.log('Get Vegetable by Id:');
console.log(vegetableJsonDAO.getById(3)); // Example: Retrieve vegetable with id 3

console.log('Get Vegetables by Partial Name:');
console.log(vegetableJsonDAO.getByPartialName('Alface'));

console.log('Get Vegetables by Benefits:');
console.log(vegetableJsonDAO.getByBenefits('Emagrecer'));
