import bay from "../../assets/bay.png";
import avene from "../../assets/avene.png";
import joseon from "../../assets/joseon.png";
import skin1004 from "../../assets/nature.png";
import "./cards.css"
const Brand = () => {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center text-pink-600">SHOP BY BRAND</h1>
      <div className="flex space-x-6 overflow-x-auto py-4 bg-white rounded-[50px] cursor-pointer ">
        {[
          { img: bay, name: "BY BEAUTY BAY" },
          { img: avene, name: "AVENE" },
          { img: joseon, name: "BEAUTY OF JOSEON" },
          { img: skin1004, name: "SKIN1004" },
        ].map((brand, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col items-center p-6 rounded-lg transition-all hover:scale-105">
            <img src={brand.img} alt={brand.name} className="h-[300px] w-auto object-contain" />
            <h1 className="text-xl font-semibold mt-4 text-gray-800">{brand.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
