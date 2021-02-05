import { Table, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';

const { Title } = Typography;

const columns = [
	{
		title: 'Name',
		dataIndex: 'username',
		key: 'name',
	},
	{
		title: 'Votes',
		dataIndex: 'choice',
		key: 'vote',
	},
];

const ResultsTable = () => {

    const { socket } = useContext(SocketContext);
	const [results, setResults] = useState([]);

    useEffect(() => {
		socket.on('vote-added', data => {
			setResults(data);
		});
	}, [socket]);

	return (
		<>
			<Title>Results</Title>
			<Table dataSource={results} columns={columns} />
		</>
	);
};

export default ResultsTable;
