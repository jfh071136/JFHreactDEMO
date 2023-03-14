import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Suspense, useState } from 'react';
import { Routes, Route, Link, } from 'react-router-dom';
import Notfound from './Notfound/';
import { Loading } from './Loading';
import { Routemap } from '../Router/';




const { Header, Content, Footer, Sider } = Layout;



function getItem(label, key, to, children,) {
    return {
        key,
        children,
        label: <Link to={to}>{label}</Link>,
    };
}
const items = Routemap.map((item) => {
    return getItem(item.label, item.label, item.path)
})

const MyLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        display: 'flex',
                        background: colorBgContainer,
                        fontSize: '36px',
                        justifyContent: 'center'

                    }}
                > JFH website</Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>
                            <Link to="/">Home</Link>
                        </Breadcrumb.Item>


                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >

                        <Suspense fallback={<Loading />}> {/* 加載畫面訂製 */}

                            <Routes>{/* 記得要包再Routes裡面 */}
                                {
                                    Routemap.map((route) => {

                                        if (route.children === undefined) {
                                            return (<Route exact={false} key={route.path} path={route.path} element={<route.component />} />)
                                        }
                                        return (
                                            <Route exact={false} key={route.path} path={route.path} element={<route.component />} >
                                                {route.children.map((item) => {
                                                    return <Route key={item.path} path={item.path} element={<item.component />} />
                                                })}
                                            </Route>)
                                    })
                                }
                                <Route path="*" element={<Notfound />} />  {/* 找不到網頁導航 */}
                            </Routes>
                        </Suspense>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >

                </Footer>
            </Layout>
        </Layout>
    );
};
export default MyLayout;