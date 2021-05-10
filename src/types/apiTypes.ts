import {
	Boolean,
	Number,
	String,
	Array,
	Record,
	Static,
	Union,
	Undefined,
} from 'runtypes';


export const IUpcomingMoviesDatesAPI = Record({
	maximum: String,
	minimum: String,
});

export const IUpcomingMoviesResultsAPI = Record({
	adult: Boolean,
	backdrop_path: String,
	genre_ids: Array(Number),
	id: Number,
	original_language: String,
	original_title: String,
	overview: String,
	popularity: Number,
	poster_path: String.optional(),
	release_date: String,
	title: String,
	video: Boolean,
	vote_average: Number,
	vote_count: Number,
});

export const IUpcomingMoviesAPI = Record({
	dates: IUpcomingMoviesDatesAPI,
	results: Array(IUpcomingMoviesResultsAPI),
	page: Number,
	total_pages: Number,
	total_results: Number,
});

export type IUpcomingMoviesAPIStatic = Static<typeof IUpcomingMoviesAPI>;

export const IFindActorKnownForAPI = Record({
	adult: Boolean.optional(),
	backdrop_path: String.optional(),
	genre_ids: Array(Number).optional(),
	id: Number.optional(),
	media_type: String.optional(),
	original_language: String.optional(),
	original_title: String.optional(),
	overview: String.optional(),
	poster_path: String.optional(),
	release_date: String.optional(),
	title: String.optional(),
	video: Boolean.optional(),
	vote_average: Number.optional(),
	vote_count: Number.optional(),
});

export const IFindActorResultsAPI = Record({
	adult: Boolean,
	gender: Number,
	id: Number,
	known_for: Array(IFindActorKnownForAPI),
	known_for_department: String,
	name: String,
	popularity: Number,
	profile_path: Union(String, Undefined),
});

export const IFindActorAPI = Record({
	results: Array(IFindActorResultsAPI),
	page: Number,
	total_pages: Number,
	total_results: Number,
});

export type IFindActorAPIStatic = Static<typeof IFindActorAPI>;
