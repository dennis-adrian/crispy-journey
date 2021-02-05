import React, { createRef } from 'react';
import { Form, Input, Button, Select, Typography } from 'antd';
const { Option } = Select;
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

const {Title} = Typography;

const Player = () => {
	const formRef = createRef();
	const onVoteChange = value => {
		console.log(value);
	};
	const onFinish = values => {
		console.log(values);
	};
	const onReset = () => {
		formRef.current.resetFields();
	};
	return (
        <Form {...layout} ref={formRef} name='control-ref' onFinish={onFinish}>
            <Title>There is no task assigned right now</Title>
			<Form.Item
				name='player'
				label='Name'
				rules={[
					{
						required: true,
					},
				]}>
				<Input autoComplete='off' />
			</Form.Item>
			<Form.Item
				name='card'
				label='Card'
				rules={[
					{
						required: true,
					},
				]}>
				<Select
					placeholder='Select a option to vote'
					onChange={onVoteChange}
					allowClear>
					<Option value='1'>1</Option>
					<Option value='2'>2</Option>
					<Option value='3'>3</Option>
					<Option value='5'>5</Option>
					<Option value='8'>8</Option>
					<Option value='13'>13</Option>
					<Option value='21'>21</Option>
					<Option value='34'>34</Option>
					<Option value='55'>55</Option>
					<Option value='89'>89</Option>
				</Select>
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
			</Form.Item>
		</Form>
	);
};

export default Player;
