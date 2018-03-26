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
	Table,
	Breadcrumb
} from 'antd';
import CountUp from 'react-countup';
import QueueAnim from 'rc-queue-anim';
import styles from './situation.less';
import Localhostd from '../../components/public/localhost';
import SituationCountup from './countup';
const indexClass = React.createClass({
			render() {
				const content = (
					<Col span={12}>
                  <Breadcrumb>
                    <Breadcrumb.Item><Link to="/index" >&nbsp;<Icon type="home" />&nbsp;</Link></Breadcrumb.Item>
				    <Breadcrumb.Item>内容区</Breadcrumb.Item>
				  </Breadcrumb>
            </Col>
				);
				const columnsNetdata = [{
					title: '类别',
					dataIndex: 'task_pid',
					key: 'task_pid'
				}, {
					title: '应用',
					dataIndex: 'task_name',
					key: 'task_name',
				}, {
					title: '进程',
					dataIndex: 'task_protocol',
					key: 'task_protocol',
				}, {
					title: '协议',
					dataIndex: 'task_ip',
					key: 'task_ip',
				}, {
					title: '本地端口',
					dataIndex: 'task_port',
					key: 'task_port',
				}, {
					title: '状态',
					dataIndex: 'task_status',
					key: 'task_status',
					render: (text) => (
						<div>{text==1?'监听':'无'}</div>
					),
				}, {
					title: '版本',
					dataIndex: 'target_port',
					key: 'target_port',
				}];

				const Networkdata = [{
					key: 1,
					target_ip: "",
					target_port: "-",
					task_ip: "TCP",
					task_name: "数据库",
					task_pid: "应用进程",
					task_port: "3306",
					task_protocol: "mysql",
					task_status: "1"
				}, {
					key: 2,
					target_ip: "",
					target_port: "-",
					task_ip: "TCP",
					task_name: "WEB服务器",
					task_pid: "应用进程",
					task_port: "80",
					task_protocol: "IIS",
					task_status: "1"
				}, {
					key: 3,
					target_ip: "",
					target_port: "-",
					task_ip: "TCP",
					task_name: "RPC",
					task_pid: "系统进程",
					task_port: "135",
					task_protocol: "svchost",
					task_status: "1"
				}, {
					key: 4,
					target_ip: "",
					target_port: "-",
					task_ip: "TCP",
					task_name: "RPC",
					task_pid: "系统进程",
					task_port: "135",
					task_protocol: "svchost",
					task_status: "1"
				}, {
					key: 5,
					target_ip: "",
					target_port: "-",
					task_ip: "TCP",
					task_name: "RPC",
					task_pid: "系统进程",
					task_port: "135",
					task_protocol: "svchost",
					task_status: "1"
				}];
				return (
						<div>
							<Localhostd name="一级首页" content={content}/> < SituationCountup / >
							<QueueAnim type="top" component="div">
							  <Row className={styles.SitausBox} key="1">
							    <Table columns={columnsNetdata} loading={false} pagination={true} dataSource={Networkdata}/>
							  </Row>
							  </QueueAnim>
						< /div>
		);
	},
})
export default indexClass