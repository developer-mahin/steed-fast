import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import Container from "../../../components/Shared/Container";
import { useHoverAnimatedProps } from "../../../utils/hoverAnimatedProps";
import "./style.css";

const Banner = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  const animationProps = useHoverAnimatedProps(toggle);

  return (
    <animated.section
      style={props}
      className="hero w-full lg:h-[90vh] h-[60vh] lg:bg-center bg-left bg-no-repeat bg-cover"
    >
      <Container>
        <div className="grid lg:grid-cols-2 lg:h-[80vh] h-[50vh] items-center justify-center">
          <div className=""></div>
          <div className="">
            <p className="w-fit px-4 py-1 bg-[#00000090] text-white rounded">
              JEWELRY
            </p>
            <h3 className="lg:text-[46px] font-semibold text-[28px] capitalize text-white py-2.5 lg:leading-[60px]">
              Popular Jewelry design combined with heartfelt messages
            </h3>
            <p className="text-xl my-2.5 text-white">
              Gift they will love-guaranteed!
            </p>
            <div className="mt-[50px] flex items-center gap-8">
              <animated.button
                style={animationProps}
                onMouseEnter={() => setToggle(!toggle)}
                className="px-5 py-2 bg-white font-medium cursor-pointer rounded-lg"
              >
                Buy Now
              </animated.button>
              <div>
                <button className="px-6 py-2 border text-white border-white cursor-pointer rounded-lg">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </animated.section>
  );
};

export default Banner;
