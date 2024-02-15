import { ItemList } from "./ItemList";
import {useState} from "react";
export const RestaurantCategory = ({data})=>{

  const [showItem,setShowItems] = useState(false);
  
  const handleClick = () =>{
    setShowItems(!showItem)
  }

    return(
        <div>
            {/* Accodian header */}
          <div className="w-8/12 mx-auto bg-gray-100 shadow-lg p-4 my-4 ">
        <div className="flex justify-between cursor-pointer" 
        onClick={handleClick} >
        <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
        {/*Accodian body */}

       {showItem && <ItemList  items={data.itemCards} />}
          </div>
            
        </div>
    )
}