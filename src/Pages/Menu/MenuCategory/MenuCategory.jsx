import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-4 my-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4  mt-4">
          Order Your Favorite Food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
