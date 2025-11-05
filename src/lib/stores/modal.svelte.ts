import type { Car } from '$lib/types';

let selectedCar = $state<Car | null>(null);
let isOpen = $state(false);

export const modalStore = {
  get car(): Car | null {
    return selectedCar;
  },
  get isOpen(): boolean {
    return isOpen;
  },
  open(car: Car): void {
    selectedCar = car;
    isOpen = true;
    document.body.style.overflow = 'hidden';
  },
  close(): void {
    selectedCar = null;
    isOpen = false;
    document.body.style.overflow = '';
  }
};
