import React from "react";
import bistoBoss from "../../assets/home/chef-service.jpg";

const BistroBossSection = () => {
  return (
    <div className="relative bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-80"
          src={bistoBoss} // Replace with your background image URL
          alt="Background"
        />
      </div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-4">Bistro Boss</h2>
        <p className="text-gray-700 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBossSection;
