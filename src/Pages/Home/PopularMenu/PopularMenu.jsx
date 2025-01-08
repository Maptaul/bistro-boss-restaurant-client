import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <section className="mb-12">
      <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0  border-b-4  mt-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
