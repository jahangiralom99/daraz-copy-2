import Banner from "../../Components/Banner/Banner";
import Usage from "../../Components/Usage/Usage";
import CardUsp from "./CardUsp";
import Categories from "./Categories";
import FlashSale from "./FlashSale";
import JustForYou from "./JustForYou";

const Home = () => {
  return (
    <div>
      <Banner />
      <Usage />
      <CardUsp />
      <FlashSale />
      <JustForYou />
      <Categories />
    </div>
  );
};

export default Home;
