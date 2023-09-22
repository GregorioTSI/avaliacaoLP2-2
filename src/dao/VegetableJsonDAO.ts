import { Vegetable } from '../models/Vegetable';
import * as vegetablesData from '../data/vegetables.json';

export class VegetableJsonDAO {
  private vegetables: Vegetable[] = vegetablesData;

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
