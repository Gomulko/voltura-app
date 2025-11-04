export type CarType = 'SUV' | 'Sedan' | 'Hatchback' | 'Coupe';

export type Drivetrain = 'AWD' | 'RWD' | 'FWD';

export interface CarVersion {
	id: string;
	name: string;
	power: string; // np. "300 KM"
	range: string; // np. "450 km"
	acceleration: string; // np. "5.5s"
	priceModifier: number;
}

export interface CarColor {
	id: string;
	name: string;
	hex: string;
	priceModifier: number;
}

export interface CarExtra {
	id: string;
	name: string;
	description: string;
	price: number;
}

export interface Car {
	id: string;
	name: string;
	type: CarType;
	drivetrain: Drivetrain;
	basePrice: number;
	mainImage: string;
	galleryImages: string[];
	versions: CarVersion[];
	colors: CarColor[];
	extras: CarExtra[];
}

export interface CarFilters {
	type: CarType | null;
	drivetrain: Drivetrain | null;
	priceMax: number | null;
}

export interface CarConfiguration {
	carId: string;
	versionId: string;
	colorId: string;
	extraIds: string[];
	totalPrice: number;
	configuredAt: string;
}
