import Container from "../../../components/Shared/Container";
import "./style.css";

const Banner = () => {
  return (
    <section className="hero w-full lg:h-[90vh] h-[60vh] lg:bg-center bg-left bg-no-repeat bg-cover">
      <Container>
        <div className="grid lg:grid-cols-2 lg:h-[80vh] h-[50vh] items-center justify-center">
          <div className=""></div>
          <div className="">
            <p className="w-fit px-4 py-2 bg-[#00000090] text-white rounded">
              JEWELRY
            </p>
            <h3 className="lg:text-[52px] text-[28px] capitalize text-white py-2.5 lg:leading-[60px]">
              Popular Jewelry design combined with heartfelt messages
            </h3>
            <p className="text-xl my-2.5 text-white">
              Gift they will love-guaranteed!
            </p>
            <div className="mt-[50px] flex items-center gap-8">
              <button className="px-[25px] py-3 bg-white text-lg font-medium cursor-pointer rounded-lg">
                Buy Now
              </button>
              <button className="px-[25px] py-3 border text-white border-white text-lg font-medium cursor-pointer rounded-lg">
                More Details
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
