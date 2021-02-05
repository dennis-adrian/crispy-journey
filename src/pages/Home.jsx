import { Col, Row, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;
const Home = () => {
	return (
		<>
			<Row>
				<Col span={12} offset={5} align='center'>
					<Title level={3}>
						Look at the side bar on your left and choose your role
					</Title>
				</Col>
			</Row>
		</>
	);
};

export default Home;
