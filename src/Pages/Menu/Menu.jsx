import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");

    return (
        <div>
          
            <Helmet>
                <title>Crave | Menu</title>
            </Helmet>

            <Cover img={menuImg} title="Our Menu"></Cover>
            
                {/* Main Cover */}
            <div className="mt-10">
                <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
                {/* Offered Menu Category */}
                <MenuCategory items={offered}></MenuCategory>
            

                {/* Desserts Menu Category */}
                <MenuCategory
                 items={desserts}
                 title="Desserts"
                 img={dessertImg}
                 ></MenuCategory>

                {/* Pizza Menu Category */}
                <MenuCategory
                 items={pizza}
                 title="pizza"
                 img={pizzaImg}
                 ></MenuCategory>

                {/* salad Menu Category */}
                <MenuCategory
                 items={salad}
                 title="salad"
                 img={saladImg}
                 ></MenuCategory>

                {/* Soup Menu Category */}
                <MenuCategory
                 items={soup}
                 title="soup"
                 img={soupImg}
                 ></MenuCategory>


            </div>
        </div>
    );
};

export default Menu;