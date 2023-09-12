import HeroSection from "../widgets/HeroSection/ui/HeroSection";
import "./style/normalize.scss";
import "./index.module.scss";
import AboutValhala from "../widgets/AboutValhala/ui/AboutValhala";
import { Layout, Space } from "antd";

const App = () => {
    return (
        <div className="App">
          <Space direction="vertical">
            <HeroSection />
            <AboutValhala />
          </Space>
            {/* <HeroSection />

            <AboutValhala /> */}
        </div>
    );
};

export default App;
