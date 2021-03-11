import { Layout, Menu, Breadcrumb, Tooltip } from 'antd';
import React from 'react'
import './index.css'
import { Route, Switch, withRouter, NavLink, Redirect } from 'react-router-dom';
import routes from '../routes'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import * as Icons from "@ant-design/icons"
import Login from '../pages/Login/index'
import PubSub from 'pubsub-js'

class SiderDemo extends React.Component {
    componentDidMount() {
        this.token = PubSub.subscribe('stateData', ( _, data) => this.setState( data ) )
    }
    componentWillUnmount() {
        PubSub.unsubscribe( this.token )
    }
    state = {
        Icons: Icons,
        collapsed: false,
        selectedKey: [ this.props.location.pathname ]
    };
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    changeMenu = path => {
        this.props.history.push(path)
        this.setState({ selectedKey: [path] })
    }
    // 导航封装
    renderMenu = data => {
        return data.map(item => {
            let icons = this.state.Icons[item.icon]
            if (item.children)
                return (<SubMenu key={item.key} icon={React.createElement(icons, {
                    className: 'icon',
                })} title={item.title}>
                    {
                        this.renderMenu(item.children)
                    }
                </SubMenu>)
            return <Menu.Item key={item.key}>
                {
                    React.createElement(icons, {
                        className: 'icon',
                    })
                }
                <NavLink to={item.key} children={item.title} /> </Menu.Item>
        })
    }
    // Route 封装
    returnRoute = data => {
        return data.map(item => {
            if (!!item.children)
                return this.returnRoute(item.children)
            return <Route key={item.key} path={item.key} component={item.component} />
        })
    }
    render() {
        const { collapsed, selectedKey } = this.state;
        return (
            !!sessionStorage.getItem('token') ? <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} trigger={null} onCollapse={this.onCollapse}>
                    <div className="logo" style={{ height: '60px' }} >
                        <img className="App-logo" style={{ height: '60px' }} src="http://img.lovemysoul.vip/images/Filedata-1615357342177.jpeg" /> <h3 style={{display:"inline"}}>悲伤日记</h3>
                    </div>
                    <Menu onSelect={(e) => { this.changeMenu(e.key) }} selectedKeys={selectedKey} mode="inline">
                        {
                            this.renderMenu(routes)
                        }
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background header-content" style={{ padding: 0 }} >
                        <Tooltip placement="left" title="logout">
                            <Icons.LogoutOutlined style={{marginRight: '20px'}} onClick={e => { sessionStorage.removeItem('token'); this.props.history.push('/login') }}/>
                        </Tooltip>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0', textAlign: 'left' }}>
                            <Breadcrumb.Item>仪表盘</Breadcrumb.Item>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Switch>
                                {
                                    this.returnRoute(routes)
                                }
                                <Redirect to="/home" />
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>BeiShang ©{ new Date().getFullYear() }  Created by CrazyYan</Footer>
                </Layout>
            </Layout> : <Route to="/login" component={Login}  />
        );
    }
}
export default withRouter(SiderDemo)