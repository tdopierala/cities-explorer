export interface SortParams {
	order: boolean;
	orderBy: string;
}

export const paramsDefault: SortParams = { order: false, orderBy: 'id' };
