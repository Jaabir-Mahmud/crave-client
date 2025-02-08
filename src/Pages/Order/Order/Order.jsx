import orderCoverImg from "../../../assets/shop/order.jpg";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import useMenu from "../../../Hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";

const Order = () => {
    const [menu] = useMenu();
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <div className="">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="SALAD"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
           <div className="grid md:grid-cols-3  gap-10">
           {
            
            salad.map(item => <FoodCard 
                item={item} 
                key={item.id}>

                </FoodCard>)
           }
           </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="PIZZA"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="SOUPS"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 3
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="DESSERTS"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 4
          </div>
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="DRINKS"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
