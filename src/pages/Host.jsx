import React, { createRef, useContext, useEffect, useState } from 'react';
import { Form, Input, Button, Typography, Table, Divider } from 'antd';
import { SocketContext } from '../context/SocketContext';
import ResultsTable from '../organisms/ResultsTable';
const layout = {
	labelCol: {
		span: 4,
	},
	wrapperCol: {
		span: 16,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 4,
		span: 16,
	},
};

const { Title } = Typography;

const Host = () => {
	const { socket } = useContext(SocketContext);
	const [newTask, setNewTask] = useState('');

	const formRef = createRef();
	const onFinish = value => {
		socket.emit('add-task', value, addedTask => {
			setNewTask(addedTask);
		});
	};
	const onReset = () => {
		formRef.current.resetFields();
	};

	const onShowResults = () => {
		socket.on('vote-added', data => {
			console.log(data);
		});
	};

	return (
		<>
			<Form
				{...layout}
				ref={formRef}
				name='control-ref'
				onFinish={onFinish}>
				<Title>Scrum Poker</Title>
				<Form.Item
					name='task'
					label='Task'
					rules={[
						{
							required: true,
						},
					]}>
					<Input autoComplete='off' />
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
					<Button htmlType='button' onClick={onReset}>
						Reset
					</Button>
					<Button
						type='link'
						htmlType='button'
						onClick={onShowResults}>
						Show results
					</Button>
				</Form.Item>
			</Form>
			<Divider />
			<ResultsTable />
		</>
	);
};

export default Host;
