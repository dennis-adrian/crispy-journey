import React from 'react';
import { Layout, Menu } from 'antd';
import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from '@ant-design/icons';
import {
	BrowserRouter as Router,
	Link,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import Host from './Host';
import Player from './Player';
import Home from './Home'

const { Sider, Content } = Layout;

const RouterPage = () => {
	return (
		<Router>
			<Layout style={{ height: '100vh' }}>
				<Sider>
					<div className='logo' />
					<Menu
						theme='dark'
						mode='inline'
						defaultSelectedKeys={['1']}>
						<Menu.Item key='1' icon={<UserOutlined />}>
							<Link to='/'>Home</Link>
						</Menu.Item>
						<Menu.Item key='2' icon={<VideoCameraOutlined />}>
							<Link to='/host'>Host</Link>
						</Menu.Item>
						<Menu.Item key='3' icon={<VideoCameraOutlined />}>
							<Link to='/player'>Player</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className='site-layout'>
					<Content
						className='site-layout-background'
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
						}}>
						<Switch>
							<Route path='/host' component={Host} />
							<Route path='/player' component={Player} />
							<Route path='/' component={Home} />
							<Redirect to='/' />
						</Switch>
					</Content>
				</Layout>
			</Layout>
		</Router>
	);
};

export default RouterPage;
