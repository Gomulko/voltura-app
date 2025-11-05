export type BodyType = 'sedan' | 'suv' | 'hatchback' | 'coupe';

export type DriveType = 'AWD' | 'RWD' | 'FWD';

export type ColorType = 'black' | 'white' | 'green' | 'blue' | 'silver';

export interface CarVersion {
  name: string;
  priceModifier: number;
  features: string[];
}

export interface CarAddon {
  id: string;
  name: string;
  price: number;
  category: 'winter' | 'accessories';
}

export interface CarSpecs {
  acceleration: string;
  topSpeed: string;
  charging: string;
  batteryCapacity: string;
  warranty: string;
}

export interface Car {
  id: string;
  name: string;
  model: string;
  basePrice: number;
  type: BodyType;
  drive: DriveType;
  range: number;
  images: {
    main: string;
    thumbnail: string;
    gallery: string[];
  };
  versions: CarVersion[];
  colors: ColorType[];
  addons: CarAddon[];
  specs: CarSpecs;
}

export interface FilterState {
  type: BodyType | null;
  drive: DriveType | null;
  minPrice: number;
  maxPrice: number;
}

export interface CarConfiguration {
  carId: string;
  carName: string;
  version: string;
  color: ColorType;
  addons: string[];
  totalPrice: number;
  timestamp: string;
}
