import { DownOutlined, LineOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Col, Dropdown, MenuProps, Row, Space } from "antd";

import cls from './NavbarHeroSection.module.scss';

const NavbarHeroSection = () => {

    const items: MenuProps["items"] = [
        {
            label: <a href="https://www.antgroup.com">RU</a>,
            key: "0",
        },
        {
            label: <a href="https://www.aliyun.com">BR</a>,
            key: "1",
        },
        {
            type: "divider",
        },
        {
            label: "3rd menu item",
            key: "3",
        },
    ];

    return (
        <Row
        style={{
            zIndex: 2,
            position: "absolute",
            top: 20,
            width: "85%",
            margin: "0 auto",
            left: 0,
            right: 0,
        }}
        justify="space-between"
        align="middle"
    >
        <Col span={6} style={{ color: "white" }} xs={2} md={3} sm={2}>
           {/* logo */}
            {/* <Image src="../../../../public/" alt="sorry" /> */}
            <img src="/images/logo2.png" alt="sorry" style={{width: "100%"}}/>
        </Col>
        <Col style={{ color: "white" }} xxl={16} xl={14} lg={14} md={14} sm={8} xs={6} >
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <a href="#div" className={cls.link_navpanel}>
                    MAIN
                </a>
                <a href="#div" className={cls.link_navpanel}>
                    ABOUT
                </a>
                <a href="#div" className={cls.link_navpanel}>
                    GAME FEATURES
                </a>
                <a href="#div" className={cls.link_navpanel}>
                    SYSTEM REQUIREMENTS
                </a>
                <a href="#div" className={cls.link_navpanel}>
                    SUBSCRIBE
                </a>
            </div>
        </Col>
        <Col span={2} style={{ color: "white" }}>
            <Space>
                <Dropdown menu={{ items }} trigger={["click"]}>
                    <Space>
                        ENG
                        <DownOutlined />
                        <LineOutlined style={{ rotate: "90deg" }} />
                    </Space>
                </Dropdown>
                <TwitterOutlined />
                <WhatsAppOutlined />
            </Space>
        </Col>
    </Row>
    );
};

export default NavbarHeroSection;