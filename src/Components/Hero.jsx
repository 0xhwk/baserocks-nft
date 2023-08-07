import HeroRock from "../assets/hero-rock.webp";
import { Parallax } from "react-scroll-parallax";
const Hero = () => {
  return (
    <>
      <div className="hero-container h100 w100 parallax">
        <Parallax
          className="parallax h100 w100"
          translateY={[-10, 10]}
          speed={5}
        >
          <div className="h100 w100 plexus-grad"></div>
          <div className="plexus h100 w100" />
        </Parallax>
        <Parallax
          className="parallax3 w100 jc-center"
          speed={5}
          translateY={[-20, 10]}
        >
          <div className="hero-main h100 flex-col ">
            <div className="hero-text fstrong">
              Limited edition Rock specially designed for Base chain
            </div>
            <button className="mint-button">Soon !</button>
            <div className="hero-description finfo">
              Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit
              amet elementum. Proin bibendum sollicitudin feugiat.
            </div>
          </div>
        </Parallax>
        <Parallax
          speed={2}
          translateY={[10, -10]}
          className="hero-rock parallax2 flex  "
        >
          <img src={HeroRock}></img>
        </Parallax>
      </div>
    </>
  );
};

export default Hero;