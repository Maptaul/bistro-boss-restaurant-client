import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import "./OrderTab.css";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} custom-bullet"></span>`;
    },
  };

  // Chunk items into arrays of 6
  const itemsPerPage = 6;
  const chunkedItems = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    chunkedItems.push(items.slice(i, i + itemsPerPage));
  }

  return (
    <div>
      <Swiper
        pagination={pagination}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {chunkedItems.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {chunk.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
