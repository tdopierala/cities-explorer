export interface Filter {
	order: boolean;
	orderBy: string;
}

export const filterDefault: Filter = { order: false, orderBy: 'name' };
