import { useQuery } from 'react-query';
import { Grid } from '@material-ui/core';
import { Card } from '../../components/Card/Card';
import { getResponse } from '../../apiMethods';
import { IQueryState } from '../../types/types';
import { IUpcomingMoviesAPIStatic } from '../../types/apiTypes';


interface IProps {
	query: IQueryState;
}

export const MoviesList = ({query}: IProps) => {
	const { isLoading, isError, data, error } = useQuery<IUpcomingMoviesAPIStatic, Error>('moviesData', () => getResponse(query));

	if(isLoading) return <span>Loading...</span>

	if(isError) return <span>{error && error.message}</span>

	return (
		<Grid container spacing={3}>
			{data && data.results.map(item => (
				<Grid
					key={item.id}
					item
					xl={2}
					lg={3}
					md={4}
					sm={6}
					xs={12}
				>
					<Card
						name={item.title}
						image={item.poster_path}
					/>
				</Grid>
			))}
		</Grid>
	);
}
