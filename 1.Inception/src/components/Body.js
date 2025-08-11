import  resObj  from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const Body = () =>{
    return (
        <div>
            <div className="seacrh">Seacrh</div>
            <div className="res-container">
                {/* <RestaurantCard resData={resObj[0]}/>
                <RestaurantCard resData={resObj[1]}/>
                <RestaurantCard resData={resObj[2]}/>
                <RestaurantCard resData={resObj[3]}/>
                <RestaurantCard resData={resObj[4]}/>
                <RestaurantCard resData={resObj[5]}/> */}

                {
                  resObj.map((restaurant , index) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;