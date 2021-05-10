export type TSection = 'movies' | 'actors';

export interface IQueryState {
	section: TSection;
	search: string;
};

