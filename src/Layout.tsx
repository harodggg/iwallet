import { Layout, Nav, Button, Notification, Skeleton, Avatar, Badge } from '@douyinfe/semi-ui';
import { IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';
import { Spin } from '@douyinfe/semi-ui';
import { IconToutiaoLogo } from '@douyinfe/semi-icons';
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB';
import ja_JP from '@douyinfe/semi-ui/lib/es/locale/source/ja_JP';
import { LocaleProvider, Pagination } from '@douyinfe/semi-ui';


const App = () => {
    const { Header, Footer, Sider, Content } = Layout;

    const switchMode = () => {
        const body = document.body;
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
        } else {
            body.setAttribute('theme-mode', 'dark');
        }
    };


    return (

        <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
            <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                <Nav
                    defaultSelectedKeys={['Account']}
                    style={{ maxWidth: 220, height: '100%' }}
                    items={[
                        { itemKey: 'Account', text: 'Account', link: 'block', icon: <IconHome size="large" /> },
                        { itemKey: 'Dapp', text: 'Dapp', icon: <IconHistogram size="large" /> },
                        { itemKey: 'Utils', text: 'Utils', icon: <IconLive size="large" /> },
                        { itemKey: 'Setting', text: 'Setting', icon: <IconSetting size="large" /> },
                    ]}
                    header={{
                        logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" alt="iwallet logo" />,
                        text: 'iwallet'
                    }}

                    footer={
                        {
                            collapseButton: true,
                            children: <><Badge dot style={{ backgroundColor: 'var(--semi-color-success)' }} /><div> 块高度: 9000</div></>,

                        }
                    }
                />

            </Sider>
            <Layout style={{ height: '100%' }}>
                <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                    <Nav
                        mode="horizontal"
                        footer={
                            <>
                                <Button
                                    theme="borderless"
                                    icon={<IconBell size="large" />}
                                    style={{
                                        color: 'var(--semi-color-text-2)',
                                        marginRight: '12px',
                                    }}
                                />
                                <Button
                                    theme="borderless"
                                    icon={<IconHelpCircle size="large" />}
                                    style={{
                                        color: 'var(--semi-color-text-2)',
                                        marginRight: '12px',
                                    }}
                                />
                                <Avatar color="orange" size="small">
                                    YJ
                                </Avatar>
                            </>
                        }
                    ></Nav>
                </Header>
                <Content
                    style={{
                        padding: '24px',
                        backgroundColor: 'var(--semi-color-bg-0)',
                    }}
                >
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            height: '560px',
                            padding: '32px',
                        }}
                    >
                        <Spin />
                        <Spin />
                        <Spin size="large" />
                        <Spin tip="loading..."></Spin>
                        <br />
                        <br />
                        <div></div>
                        <Button type="primary" onClick={() => Notification.success({
                            duration: 3,
                            position: 'topRight',
                            content: 'Wallet ',
                            title: 'Iwallet'
                        })} style={{ margin: 4 }}>
                            Success
                        </Button>

                        <Button
                            icon={<IconToutiaoLogo />}
                            style={{ marginRight: 5 }}
                            onClick={() =>
                                Notification.info({
                                    title: 'Hi, Bytedance',
                                    content: 'ies dance dance dance',
                                    duration: 3,
                                    position: 'topLeft',
                                    icon: <IconToutiaoLogo style={{ color: 'red' }} />,
                                })
                            }
                        ></Button>
                        <Button
                            onClick={switchMode}
                        >
                            Switch Mode
                        </Button>
                        <Skeleton placeholder={<Skeleton.Paragraph rows={2} />} loading={true} active>
                            <p>Hi, Bytedance dance dance.</p>
                            <p>Hi, Bytedance dance dance.</p>
                        </Skeleton>
                        <>
                            <LocaleProvider locale={en_GB}>
                                <Pagination total={100} showTotal showSizeChanger style={{ margin: 20 }} />
                            </LocaleProvider>
                            <LocaleProvider locale={ja_JP}>
                                <Pagination total={100} showTotal showSizeChanger style={{ margin: 20 }} />
                            </LocaleProvider>
                        </>
                    </div>
                </Content>
                <Footer
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '20px',
                        color: 'var(--semi-color-text-2)',
                        backgroundColor: 'rgba(var(--semi-grey-0), 1)',
                    }}
                >
                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
                        <span>Copyright © 2022 harodggg. All Rights Reserved. </span>
                    </span>
                </Footer>
            </Layout>
        </Layout >
    );
};

export default App;
