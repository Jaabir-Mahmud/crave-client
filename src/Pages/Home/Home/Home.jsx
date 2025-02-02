import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefReco from "../ChefReco/ChefReco";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Crave | Home</title>
      </Helmet>

      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ChefReco></ChefReco>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
