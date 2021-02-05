import React, { createRef } from 'react';
import { Form, Input, Button, Typography, Table } from 'antd';
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

const dataSource = [
	{
		key: '1',
		name: 'Carlos Vaca Perez',
		vote: 2,
	},
	{
		key: '2',
		name: 'John',
		vote: 5,
	},
];

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Votes',
		dataIndex: 'vote',
		key: 'vote',
	},
];

const Host = () => {
	const formRef = createRef();
	const onFinish = values => {
		console.log(values);
	};
	const onReset = () => {
		formRef.current.resetFields();
	};
	const onShowResults = () => {
		console.log('show results');
	};
	return (
		<>
			<Form
				{...layout}
				ref={formRef}
				name='control-ref'
				onFinish={onFinish}>
				<Title>This will show the task you input</Title>
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
				<Form.Item
					noStyle
					shouldUpdate={(prevValues, currentValues) =>
						prevValues.gender !== currentValues.gender
					}>
					{({ getFieldValue }) => {
						return getFieldValue('gender') === 'other' ? (
							<Form.Item
								name='customizeGender'
								label='Customize Gender'
								rules={[
									{
										required: true,
									},
								]}>
								<Input />
							</Form.Item>
						) : null;
					}}
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
			<Table dataSource={dataSource} columns={columns} />
		</>
	);
};

export default Host;
