import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu, loading] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  //   const drinks = menu.filter((item) => item.category === "drinks");
  //   const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="mb-10">
      <Helmet>
        <title>BISTRO BOSS | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu" />
      {/* main cover */}
      <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* desserts menu items */}
      <MenuCategory items={desserts} title="dessert" img={dessertBg} />
      {/* pizza menu items */}
      <MenuCategory items={pizza} title="pizza" img={pizzaBg} />
      {/* salad menu items */}
      <MenuCategory items={salad} title="salads" img={saladBg} />
      {/* soup menu items */}
      <MenuCategory items={soup} title="soup" img={soupBg} />
    </div>
  );
};

export default Menu;
