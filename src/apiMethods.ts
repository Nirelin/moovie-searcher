import { api, apiKey, mapSectionToMethod, mapSectionToType} from './constants';
import { IQueryState } from './types/types';


export const getResponse = async (query: IQueryState) => {
	const apiMethod = mapSectionToMethod[query.section];
	const apiType = mapSectionToType[query.section];

	const result = await fetch(`${api}${apiMethod}?${apiKey}${query.section === 'actors' ? `&query=${query.search}` : ''}`)
		.then(result => result.json());

	const validationObject = apiType.validate(result);

	if (!validationObject.success) {
		console.error('API Validatin Error', validationObject);
	}

	return result;
};
