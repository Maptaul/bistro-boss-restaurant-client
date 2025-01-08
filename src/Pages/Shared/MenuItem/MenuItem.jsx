const MenuItem = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="flex items-center justify-center p-2 border-gray-200 gap-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase ">{name}---------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
