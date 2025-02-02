import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefReco from "../ChefReco/ChefReco";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <ChefReco></ChefReco>
        </div>
    );
};

export default Home;