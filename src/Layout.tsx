import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar } from '@douyinfe/semi-ui';
import { IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';


const App = () => {
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
            <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                <Nav
                    defaultSelectedKeys={['Home']}
                    style={{ maxWidth: 220, height: '100%' }}
                    items={[
                        { itemKey: 'Account', text: 'Account', icon: <IconHome size="large" /> },
                        { itemKey: 'Dapp', text: 'Dapp', icon: <IconHistogram size="large" /> },
                        { itemKey: 'Utils', text: 'Utils', icon: <IconLive size="large" /> },
                        { itemKey: 'Setting', text: 'Setting', icon: <IconSetting size="large" /> },
                    ]}
                    header={{
                        logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
                        text: 'iwallet',
                    }}
                    footer={{
                        collapseButton: true,
                    }}
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
                    <div> h1</div>
                    <div> h2</div>
                    <div> h3 <div>h4</div></div>
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            height: '560px',
                            padding: '32px',
                        }}
                    >
                        <div><a>hello</a> kdf<a>good</a></div>
                        <Skeleton placeholder={<Skeleton.Paragraph rows={2} />} loading={true}>
                            <p>Hi, Bytedance dance dance.</p>
                            <p>Hi, Bytedance dance dance.</p>
                        </Skeleton>
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
        </Layout>
    );
};

export default App;
