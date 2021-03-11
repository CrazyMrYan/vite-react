import Home from '../pages/Home'
import UserInfo from '../pages/UserInfo'

const MenuConfig = [
    {
        icon:'DashboardOutlined',
        title:'仪表盘',
        key:'/1',
        children:[
            {
                icon:'HomeOutlined',
                title:'首页',
                key:'/home',
                component:Home,
            } 
        ]
    },
    {
        icon:'TeamOutlined',
        title:'用户信息',
        key:'/userinfo',
        component:UserInfo
    }
]

export default MenuConfig;