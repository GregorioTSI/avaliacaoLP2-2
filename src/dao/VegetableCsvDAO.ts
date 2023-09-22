import { Vegetable } from '../models/Vegetable';
import * as fs from 'fs';

const csvFilePath = '../../data/vegetables.csv';

export class VegetableCsvDAO {
  private vegetables: Vegetable[] = [];

  constructor() {
    this.loadVegetables();
  }

  private loadVegetables(): void {
    const fileContent = fs.readFileSync(csvFilePath, 'utf-8');
    const lines = fileContent.split('\n').slice(1);
    lines.forEach((line) => {
      const [id, name, imageURL, benefits] = line.split(',');
      this.vegetables.push({
        id: parseInt(id),
        name,
        imageURL,
        benefits,
      });
    });
  }

  getById(id: number): Vegetable | undefined {
    return this.vegetables.find((vegetable) => vegetable.id === id);
  }

  getByPartialName(partialName: string): Vegetable[] {
    const lowerPartialName = partialName.toLowerCase();
    return this.vegetables.filter((vegetable) =>
      vegetable.name.toLowerCase().includes(lowerPartialName)
    );
  }

  getByBenefits(benefits: string): Vegetable[] {
    const lowerBenefits = benefits.toLowerCase();
    return this.vegetables.filter((vegetable) =>
      vegetable.benefits.toLowerCase().includes(lowerBenefits)
    );
  }
}
