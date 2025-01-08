import { Helmet } from "react-helmet-async";
import BistroBossSection from "../../BistroBossSection/BistroBossSection";
import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <BistroBossSection />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
