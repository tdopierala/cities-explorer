import data from '../data/cities.json';

export interface City {
	id: number;
	name: string;
	district: string;
	voivodship: string;
	population: number;
	area: number;
}

export const citiesMock: City[] = data.cities;
