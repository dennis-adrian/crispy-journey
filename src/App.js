import React from 'react';
import { SocketProvider } from './context/SocketContext';
import RouterPage from './pages/RouterPage';

const App = () => {
	return (
		<SocketProvider>
			<RouterPage />
		</SocketProvider>
	);
};

export default App;
