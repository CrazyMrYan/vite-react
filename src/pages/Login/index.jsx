import  React,{ Component } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
import './index.css'
import PubSub from 'pubsub-js'

export default class Login extends Component {
    getLogin = () => {
        sessionStorage.setItem('token',new Date().getTime())
        PubSub.publish('stateData',{ selectedKey: ['/home'] })
        this.props.history.push('/home')
        document.title = '首页'
    }
    componentDidMount(){
        document.title = '登录'
    }
    render() {
        return (
            <div className="login-bg">
                <div className="login-form" >
                    <h1><img className="logo" src="https://lovemysoul.vip/vite-react/logo.png" alt="" /></h1>
                    <Form>
                        <Form.Item>
                            <Input
                                size="large"
                                placeholder="Enter your username"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input.Password size="large"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Enter your password" />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" block onClick={ () => this.getLogin() } type="primary"> click login </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
