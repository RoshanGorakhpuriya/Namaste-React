const RestaurantCard = (props)=>{
    // console.log(props)
    const {resData} = props;
     return (
         <div className="Card">
             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} style={{height:"250px" , width:"150px"}}/>
             <h3>{resData.info.name}</h3>
             <h4>{resData.info.cuisines.join(",")}</h4>
             <h4>{resData.info.avgRating}</h4>
             <h4>{resData.info.deliveryTime}</h4>
             <h4>{resData.info.costForTwo}</h4>
         </div>
     )
 }

 export default RestaurantCard;