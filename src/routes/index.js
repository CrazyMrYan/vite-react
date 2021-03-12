import Home from '../pages/Home'
import UserInfo from '../pages/UserInfo'
import Multilevel3 from '../pages/Multilevel/pages/Multilevel3'
import Multilevel4 from '../pages/Multilevel/pages/Multilevel4'
import Multilevel5 from '../pages/Multilevel/Multilevel2'
import Readme from '../pages/Readme'
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
                component: Home
            }
        ]
    },
    {
        icon:'MenuOutlined',
        title:'多级菜单1',
        key:'/Multilevel1',
        children:[
            {
                icon:'UnorderedListOutlined',
                title:'1-1',
                key:'/Multilevel2',
                children: [
                    {
                        title:'1-1-1',
                        key:'/Multilevel3',
                        component: Multilevel3
                    },
                    {
                        title:'1-1-2',
                        key:'/Multilevel4',
                        component: Multilevel4
                    },
                ]
            },
            {
                icon:'UnorderedListOutlined',
                title:'1-2',
                key:'/Multilevel5',
                component: Multilevel5
            },
        ]
    },
    {
        icon:'TeamOutlined',
        title:'用户信息',
        key:'/userinfo',
        component: UserInfo
    },
    {
        icon:'QuestionCircleOutlined',
        title:'关于模版',
        key:'/readme',
        component: Readme
    }
]

export default MenuConfig;