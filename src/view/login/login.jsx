import React from 'react';
import {
  connect
} from 'dva';
import {
  Spin,
  Icon,
  message,
  Form,
  Input,
  Button
} from 'antd';
import styles from './login.less';
const FormItem = Form.Item;

/*登陆*/
const Login = React.createClass({
  getInitialState() {
    return {
      error: false,
      loading: false
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      /*请求登录*/
      this.props.dispatch({
        type: 'LoginUser/Userlogin',
        payload: {
          ...values,
        }
      })
    });
  },

  render() {
    const {
      loading
    } = this.props.LoginUser
    console.log(loading)
    const formItemLayout = {
      labelCol: {
        span: 8
      },
      // wrapperCol: {
      //   span: 20
      // },
    };
    const {
      getFieldDecorator
    } = this.props.form;
    return (
      <div className ={styles.loginCaioner}>
       <Spin spinning={loading} >
        <Form onSubmit={this.handleSubmit} className={styles.loginFrom}>
        <div className={styles.loginBox}>
           <h1 className={styles.loginword}>优网安全系统登录</h1><br/>
           <p>React&nbsp;项目演示——demo项目开发模板</p>
          </div>
        <FormItem {...formItemLayout} hasFeedback>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '用户名不能为空!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="请输入用户名" autoComplete="off" />
          )}
        </FormItem>
        <FormItem  {...formItemLayout} hasFeedback>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码不能为空!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请输入密码" autoComplete="off"/>
          )}
        </FormItem>
        <FormItem>
           <Button type="primary" loading={loading} htmlType="submit" className="login-form-button">
            登录
           </Button>
        </FormItem>
      </Form>
      </Spin>
       <div className={styles.loginFooter}>
        <p>北京优网安全技术有限公司</p>
        <p>Beijing excellent netwoork Safe Technology Ltd</p>
        <p>®版权所有&nbsp;&nbsp;客服电话：027-23456789</p>
       </div>
     </div>
    )
  }
})


function mapStateToProps(LoginUser) {
  return {
    ...LoginUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const LoginUser = Form.create()(Login)
  /*建立数据关联关系*/
export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);