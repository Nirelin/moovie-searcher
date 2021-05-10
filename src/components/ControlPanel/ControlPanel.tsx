import {
	useState,
	useCallback,
	useMemo,
	ChangeEvent,
} from 'react';
import { TSection, IQueryState } from '../../types/types';
import { debounce, capitalize } from 'lodash';
import { Button, TextField } from '@material-ui/core';
import styles from './ControlPanel.module.css';


interface IProps {
	query: IQueryState;
	changeQuery: (newQuery: Partial<IQueryState>)=> void;
}

const sections = ['movies', 'actors'] as const;

export const ControlPanel = ({query, changeQuery} : IProps) => {
	const [search, setSearch] = useState('');

	const queryChangeDebounce = useMemo(
		() => debounce((search: string) => changeQuery({search}), 1500),
		[changeQuery],
	)

	const handleSelectSection = (section: TSection) => {
		if (query.section === section) return;

		changeQuery({section})
	};

	const handleChangeSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		setSearch(event.target.value);
		queryChangeDebounce(event.target.value);
	}, [queryChangeDebounce]);

	return (
		<div className={styles.panel}>
			<div className={styles.buttons}>
				{sections.map((section) => (
					<Button
						key={section}
						className={styles.button}
						variant="contained"
						color={query.section === section ? 'secondary' : 'primary'}
						onClick={() => handleSelectSection(section)}
					>
						{capitalize(section)}
					</Button>
				))}
			</div>
			{query.section === 'actors' ? (
				<TextField
					className={styles.search}
					variant="outlined"
					size="small"
					label="Search for actor"
					value={search}
					autoFocus
					onChange={handleChangeSearch}
				/>
			) : null}
		</div>
	)
};
