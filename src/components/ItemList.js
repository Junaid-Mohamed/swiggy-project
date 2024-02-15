
// import {CDN_URL} from "../utils/constants" 
// import { LOGO_URL } from "../utils/constants";

export const ItemList = ({items}) =>{
    return(
        <div>
           {items.map((item)=>(
             <div key={item.card.info.id}
             className=" border-b-2 border-gray-200 p-2 m-2 text-left flex justify-between "
             >
                <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> - ₹{(item.card.info.price/100)}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-2">
                    <div className="absolute" >
                        <button className="pl-1 mt-1 bg-black text-white shadow-lg" >Add+</button>
                    </div>
                    <img className="w-36" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+item.card.info.imageId} /></div>
             </div>
           ))}
        </div>
    )
}