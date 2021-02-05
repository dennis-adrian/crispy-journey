import { useEffect, useMemo, useState } from 'react';
import io from 'socket.io-client'

const useSocket = serverPath => {
	//configuring socket connection

	//the connection will be renewed only if the server path changes
	//if the server path changes, it's going to get a new socket
	const socket = useMemo(
		() =>
			io.connect(serverPath, {
				transports: ['websocket'],
			}),
		[serverPath],
	);
	const [online, setOnline] = useState(false);
	//listen if the socket is connected or not
	useEffect(() => {
		setOnline(socket.connected);
	}, [socket]);
	//listen for connections
	useEffect(() => {
		socket.on('connect', () => {
			setOnline(true);
		});
	}, [socket]);
	//listen for disconnections
	useEffect(() => {
		socket.on('disconnect', () => {
			setOnline(false);
		});
	}, [socket]);

	return {
		socket,
		online,
	};
};

export default useSocket;
