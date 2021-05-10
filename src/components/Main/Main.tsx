import { useState, useCallback } from 'react';
import { MoviesList } from '../MoviesList/MoviesList';
import { ActorsList } from '../ActorsList/ActorsList';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { IQueryState } from '../../types/types';
import styles from './Main.module.css';

const mapSectionToComponent = {
	movies: MoviesList,
	actors: ActorsList,
}

export const Main = () => {
	const [query, setQuery] = useState<IQueryState>({
		section: 'movies',
		search: '',
	});

	const handleChangeQuery = useCallback(
		newValue => setQuery((prevState) => ({
			...prevState,
			...newValue,
		})),
		[setQuery],
	);

	const CurrentViewComponent = mapSectionToComponent[query.section];

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>
				Movie searcher
			</h1>
			<ControlPanel
				query={query}
				changeQuery={handleChangeQuery}
			/>
			<CurrentViewComponent query={query} />
		</div>
	);
}
