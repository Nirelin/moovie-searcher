import { IUpcomingMoviesAPI, IFindActorAPI } from './types/apiTypes';

export const api = 'https://api.themoviedb.org/3/' as const;

export const imgApi = 'http://image.tmdb.org/t/p/w500' as const;

export const apiKey = 'api_key=bab0754c0d8cbbca9c1e768d4aee329a' as const;

export const mapSectionToMethod = {
	movies: 'movie/upcoming',
	actors: 'search/person',
} as const;

export const mapSectionToType = {
	movies: IUpcomingMoviesAPI,
	actors: IFindActorAPI,
}
