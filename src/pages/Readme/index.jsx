import React, { Component } from 'react'
import { Typography } from 'antd';
const CodePreview = ({ children }) => (
    <pre className="pre">
      <code>
        <Typography.Text copyable>{children}</Typography.Text>
      </code>
    </pre>
);
export default class ReadMe extends Component {
    render() {
        return (
            <div>
                <h1 style={{ fontSize:'30px' }}>vite-react</h1>
                <h2>克隆代码</h2>
                <CodePreview>git clone git@github.com:CrazyMrYan/vite-react.git</CodePreview>

                <h2>下载依赖</h2>
                <CodePreview>yarn install</CodePreview>

                <h2>启动项目</h2>
                <CodePreview>yarn dev</CodePreview>

                <h2>打包项目</h2>
                <CodePreview>yarn build</CodePreview>
                ⚠️ 注意：打包需要修改 <b>vite.config.js</b> 中的 <b>base</b>
                <h2>src 文件说明</h2>
                <pre className="pre">
                    <code>
                            src  //主要资源<br/>
                                layout  // 布局模块<br/>
                                pages  // 页面模块<br/>
                                routes  // 路由存放<br/>
                                main.jsx // 入口文件 <br/>
                    </code>
                </pre>

                <h2>本项目地址</h2>
                <a href="https://github.com/CrazyMrYan/vite-react" target="_blank" rel="noopener noreferrer">https://github.com/CrazyMrYan/vite-react</a>

                <h2>提issue</h2>
                如果您有对本项目更好的建议或有任何异议，可以提交 <a href="https://github.com/CrazyMrYan/vite-react/issues">issue</a>
            </div>
        )
    }
}
