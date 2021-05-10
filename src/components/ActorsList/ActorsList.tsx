import { useQuery } from 'react-query';
import { Grid } from '@material-ui/core';
import { Card } from '../../components/Card/Card';
import { getResponse } from '../../apiMethods';
import { IQueryState } from '../../types/types';
import { IFindActorAPIStatic } from '../../types/apiTypes';


interface IProps {
	query: IQueryState;
}

export const ActorsList = ({query}: IProps) => {
	const { isLoading, isError, data, error } = useQuery<IFindActorAPIStatic, Error>('actorsData', () => getResponse(query), {enabled: !!query.search.length});

	if(!query.search) return <span>Enter name of actor to begin search</span>

	if(isLoading) return <span>Loading...</span>

	if(isError) return <span>{error && error.message}</span>

	if(data && !data.results.length) return <span>No results found</span>

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
						name={item.name}
						image={item.profile_path}
					/>
				</Grid>
			))}
		</Grid>
	);
}
