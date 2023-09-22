import { VegetableCsvDAO } from '../dao/VegetableCsvDAO';

const vegetableCsvDAO = new VegetableCsvDAO();

console.log('Get Vegetable by Id:');
console.log(vegetableCsvDAO.getById(3)); // Example: Retrieve vegetable with id 3

console.log('Get Vegetables by Partial Name:');
console.log(vegetableCsvDAO.getByPartialName('Alface'));

console.log('Get Vegetables by Benefits:');
console.log(vegetableCsvDAO.getByBenefits('Emagrecer'));
