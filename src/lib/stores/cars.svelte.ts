import carsData from '$lib/data/cars.json';
import type { Car } from '$lib/types';

const allCars = $state<Car[]>(carsData as Car[]);

export const carsStore = {
  get all(): Car[] {
    return allCars;
  },
  getById(id: string): Car | undefined {
    return allCars.find((car) => car.id === id);
  }
};
