import { QueryClient, QueryClientProvider } from 'react-query'
import { Main } from './components/Main/Main';

const queryClient = new QueryClient()

const App = () => (
	<QueryClientProvider client={queryClient}>
		<Main />
	</QueryClientProvider>
)

export default App;
