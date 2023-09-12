import { Col, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import cls from "./HeroSection.module.scss";
import {
    BorderHorizontalOutlined,
    BorderRightOutlined,
    DownOutlined,
    LineOutlined,
    TwitterOutlined,
    WhatsAppOutlined,
} from "@ant-design/icons";

const HeroSection = () => {
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
        <div>
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
                <Col span={6} style={{ color: "white" }}>
                    <img src="../../../../public/image/logo.png" alt="sorry" />
                    {/* <img src="../../../../public/image/logo.png" alt="sorry"/> */}
                </Col>
                <Col span={16} style={{ color: "white" }}>
                    <Space size={60}>
                        <a href="#div" style={{ color: "white" }}>
                            MAIN
                        </a>
                        <a href="#div" style={{ color: "white" }}>
                            ABOUT
                        </a>
                        <a href="#div" style={{ color: "white", whiteSpace: "nowrap" }}>
                            GAME FEATURES
                        </a>
                        <a href="#div" style={{ color: "white", whiteSpace: "nowrap" }}>
                            SYSTEM REQUIREMENTS
                        </a>
                        <a href="#div" style={{ color: "white" }}>
                            SUBSCRIBE
                        </a>
                    </Space>
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
            <div className={cls.bg_image} />
        </div>
    );
};

export default HeroSection;
