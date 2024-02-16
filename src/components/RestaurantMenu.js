import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { RestaurantCategory } from "./RestaurantCateogry";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex,setShowIndex] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // console.log(resInfo)
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(itemCards);
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  // console.log(categories)
  return (
    <div className="text-center">
      <h1 className="font-bold m-5 text-2xl">{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p> 
      {/* accordian cateogries */}
      {categories.map((category,index)=> <RestaurantCategory setShowIndex={()=>setShowIndex(index)} showItem={index === showIndex && true} data={category?.card?.card}/> )}
    </div>
  );
};

export default RestaurantMenu;
