import { Layout, Menu, Image, Tooltip } from 'antd';
import React from 'react'
import './index.css'
import { Route, Switch, withRouter, NavLink, Redirect } from 'react-router-dom';
import routes from '../routes'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import * as Icons from "@ant-design/icons"
import Login from '../pages/Login/index'
import PubSub from 'pubsub-js'

class Sidebar extends React.Component {
    componentDidMount() {
        this.Deconstruction(routes)
        this.changeMenu( this.props.location.pathname )
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
        // 获取 title
        let current = this.routeData.filter(item => {
            return item.key == path
        })
        document.title = !!current.length ? current[0].title : 'app'
    }
    // 获取当前route 的title
    routeData = []
    Deconstruction = data => {
        data.forEach(item => {
             if(item.children){
                this.Deconstruction(item.children)
            }else{
                this.routeData.push(item)
            }
        })
    }
    getIcon = icons => {
        return React.createElement(icons, {
            className: 'icon',
        })
    }
    // 导航封装
    renderMenu = data => {
        return data.map(item => {
            let icons = this.state.Icons[item.icon] || null
            if (item.children)
                return (<SubMenu key={ item.key } icon={ icons ? this.getIcon(icons) : '' } title={ item.title }>
                    {
                        this.renderMenu(item.children)
                    }
                </SubMenu>)
            return <Menu.Item key={item.key}>
                {
                    icons ? this.getIcon(icons) : ''
                }
                <NavLink to={{ pathname:item.key  }} children={ item.title } replace /> </Menu.Item>
        })
    }
    // Route 封装
    returnRoute = data => {
        return data.map(item => {
            if (!!item.children && !!item.children.length)
                return this.returnRoute(item.children)
            return <Route key={ item.key } path={ item.key } component={ item.component } />
        })
    }
    render() {
        const { collapsed, selectedKey } = this.state;
        return (
            !!sessionStorage.getItem('token') ? <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} trigger={null} onCollapse={ this.onCollapse }>
                    <div style={{ height: '60px' , textAlign: 'center'}} >
                        <h1 ><img className="homelogo" src="http://lovemysoul.vip/vite-react/logo.png" alt=""/></h1>
                    </div>
                    <Menu onSelect={ e => { this.changeMenu(e.key) }} selectedKeys={ selectedKey } mode="inline">
                        {
                            this.renderMenu(routes)
                        }
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background header-content" style={{ padding: 0 }} >
                        <Image
                                src="error"
                                width="40px"
                                height="40px"
                                src="http://blog.lovemysoul.vip/_assets/t.56deea70.jpg"
                                fallback="data:image/png;base64,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"
                        />
                        <Tooltip placement="left" title="logout">
                            <Icons.LogoutOutlined style={{ margin: '0 20px', fontSize: '20px' }} onClick={ e => { sessionStorage.removeItem('token'); this.props.history.push('/login') }}/>
                        </Tooltip>
                    </Header>
                    <Content style={{ margin: '16px' }}>
                        {/* 
                            Route
                        */}
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
            </Layout> : <Route to="/login" component={ Login }  />
        );
    }
}
export default withRouter(Sidebar)