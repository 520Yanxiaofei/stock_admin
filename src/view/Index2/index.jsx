import React, {
	Component,
	PropTypes
} from 'react';
import {
	Link,
} from 'react-router';
import {
	Spin,
	Icon,
	Pagination,
	Col,
	Row,
	Breadcrumb
} from 'antd';
import QueueAnim from 'rc-queue-anim';
import styles from './index.less';
import Localhostd from '../../components/public/localhost';
const Index2 = React.createClass({
	render() {
		const content = (
			<Col span={12}>
                  <Breadcrumb>
                    <Breadcrumb.Item><Link to="/index" >&nbsp;<Icon type="home" />&nbsp;</Link></Breadcrumb.Item>
				    <Breadcrumb.Item>内容区</Breadcrumb.Item>
				  </Breadcrumb>
            </Col>
		);
		return (
			<div>
			  <Localhostd name="二级页面" content={content}/>
			  <QueueAnim type="top" component="div">
				  <Row className={styles.SitausBox} key="1">
				     内容区
				  </Row>
			  </QueueAnim>
			  
		   </div>
		);
	},
})

export default Index2