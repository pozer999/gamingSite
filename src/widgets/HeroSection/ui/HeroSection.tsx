import BuyContainer from "../../BuyContainer/ui/BuyContainer";
import NavbarHeroSection from "../../NavbarHeroSection/ui/NavbarHeroSection";
import cls from "./HeroSection.module.scss";

const HeroSection = () => {
    return (
        <div className={cls.bg_image}>
            <NavbarHeroSection />
            <BuyContainer/>
        </div>
    );
};

export default HeroSection;
