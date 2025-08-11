import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
/* <div id="outer">
    <div id="inner1">
        <h1>I'm 1inside div</h1>
        <h2>i'm 1inside div2</h2>
    </div>
    <div id="inner2">
        <h1>I'm 2inside div</h1>
        <h2>i'm 2inside div2</h2>
    </div>
</div> */


// Nested 
// import React from "react";
// import ReactDOM from "react-dom/client"
// const heading2 = React.createElement("div" , {id:"outer"} , [ 
//     React.createElement("div" , {id : "inner"} , 
//     [React.createElement("h1" , {}  , "I'm inside div"),
//     React.createElement("h1" , {}  , "I'm inside div2")] 
//     ),
//     React.createElement("div" , {id : "inner"} , 
//         [React.createElement("h1" , {}  , "I'm inside div"),
//         React.createElement("h1" , {}  , "I'm inside div2")] 
//         )]
// )

// const root = ReactDOM.createRoot(document.getElementById("header"));
// root.render(heading2);

// const heading = React.createElement("h1" , {id:"heading"} , "Hello From React");
// //console.log(heading);
// const root =  ReactDOM.createRoot(document.getElementById("root"));
// // It's used to create a root for rendering React components in the DOM.
// console.log(root);
// root.render(heading);



// Components Description 

// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1" , {id : "heading"} , "Namaste React");

// console.log(heading);


// // React Element
// const jsxHeading = (<h1 className="head">
//     Namaste React From JSX
//     </h1>
// );

// React Component
// class Component - old way
// Functional Component - new way

// const Element = (<div>React Element</div>)

// const Title = () => (
//     <div>
//         {Element}
//         <h1> Title Functional Component</h1>
//     </div>
// )

// const HeadingComponent = () => (
//     <div>
//         {Title()}
//         <h1>Heading Functional Component</h1>
//     </div>
// )

// const old = React.createElement("div" , {} , [
//     React.createElement("div" , {} , "React Element"),
//     React.createElement
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);



// Making a Feasto - A Food Delivery Website

import React from "react";
import ReactDom from "react-dom/client";

const resObj = [
  {
  "type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "1003414",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
      "locality": "Chhindwara",
      "areaName": "Parasia Road",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas","BreakFast"
      ],
      "avgRating": 4.3,
      "parentId": "721",
      "avgRatingString": "4.3",
      "totalRatingsString": "166",
      "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 13.1,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "13.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-08-11 00:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-1cc5e3ce-c161-40e4-ba46-5591624eb36f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  ,
  },
  {
    "type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
              "id": "630193",
              "name": "Champaran  Handi Restaurant",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/29/4210a054-9608-4840-b00f-0aaf9a5bd332_1bf1f7a4-c59f-42b0-b2b8-9ac8615cbcc7.JPG",
              "locality": "Sinchai Colony",
              "areaName": "Nagpur road",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "North Indian"
              ],
              "avgRating": 4.3,
              "parentId": "376324",
              "avgRatingString": "4.3",
              "totalRatingsString": "424",
              "promoted": true,
              "adTrackingId": "cid=31899068~p=0~adgrpid=31899068#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=630193~plpr=COLLECTION~eid=d00cdaee-f42b-4607-a55c-5f41ae3e779b~srvts=1754894196080~collid=83639",
              "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 11.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "11.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-08-11 23:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "31899068"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=630193&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          ,
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
    } ,
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "234875",
              "name": "Adil Hotel",
              "cloudinaryImageId": "lln3zxpll8pshaeqrgr9",
              "locality": "Rautha Wada",
              "areaName": "Chhindwara Locality",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Biryani",
                "Tandoor"
              ],
              "avgRating": 4.4,
              "parentId": "27123",
              "avgRatingString": "4.4",
              "totalRatingsString": "1.3K+",
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 11.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "11.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-08-12 00:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=234875&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "658210",
              "name": "The Fusion Lounge",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/b7f823ab-9291-4be3-bb39-e5415ca70c35_5a6a3c4d-1a35-44c7-b7f0-02fd55b9fc83.JPG",
              "locality": "Triloki nagar",
              "areaName": "Railway Station",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "South Indian",
                "Chinese",
                "Beverages",
              ],
              "avgRating": 4.1,
              "parentId": "395453",
              "avgRatingString": "4.1",
              "totalRatingsString": "356",
              "promoted": true,
              "adTrackingId": "cid=31899069~p=1~adgrpid=31899069#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=658210~plpr=COLLECTION~eid=a5816d52-9681-4a9e-8647-968ddf0b197d~srvts=1754894196080~collid=83639",
              "sla": {
                "deliveryTime": 56,
                "lastMileTravel": 11.9,
                "serviceability": "SERVICEABLE",
                "slaString": "55-65 mins",
                "lastMileTravelString": "11.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-08-11 23:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "31899069"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=658210&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          ,
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
    } ,
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "946888",
              "name": "Sunfire Rooftop Restaurant",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/5/dbc149ab-20bb-4a19-81ae-4ada60c3c2e1_dca5cedc-d25b-499d-9531-5e0f3c845caa.jpg",
              "locality": "Venkatesh Mall",
              "areaName": "Chhindwara City",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Biryani",
                "Tandoor",
                "French",
                "Snacks",
              ],
              "avgRating": 3.7,
              "veg": true,
              "parentId": "490985",
              "avgRatingString": "3.7",
              "totalRatingsString": "12",
              "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 11.8,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "11.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-08-11 23:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹131 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=946888&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          } 
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "864617",
              "name": "Sab Ghar Tak Foods",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/04109fba-1c29-43b5-a800-2446374aa978_864617.jpg",
              "locality": "Dadra and Nagar Haveli",
              "areaName": "Chhindwara City",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Chinese",
                "Biryani",
                "Indian",
                "Beverages",
                "Tandoor"
              ],
              "avgRating": 4.1,
              "parentId": "173932",
              "avgRatingString": "4.1",
              "totalRatingsString": "20",
              "sla": {
                "deliveryTime": 53,
                "lastMileTravel": 14.1,
                "serviceability": "SERVICEABLE",
                "slaString": "50-60 mins",
                "lastMileTravelString": "14.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-08-11 23:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹50 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=864617&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
    },
    {
      "type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "1003415",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
          "locality": "Chhindwara",
          "areaName": "Parasia Road",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas","BreakFast"
          ],
          "avgRating": 4.3,
          "parentId": "721",
          "avgRatingString": "4.3",
          "totalRatingsString": "166",
          "sla": {
            "deliveryTime": 40,
            "lastMileTravel": 13.1,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "13.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-08-11 00:00:00",
            "opened": true
          },
          "badges": {
    
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
    
              },
              "textBased": {
    
              },
              "textExtendedBadges": {
    
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
          },
          "orderabilityCommunication": {
            "title": {
    
            },
            "subTitle": {
    
            },
            "message": {
    
            },
            "customIcon": {
    
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
    
              },
              "video": {
    
              }
            }
          },
          "reviewsSummary": {
    
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
    
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-1cc5e3ce-c161-40e4-ba46-5591624eb36f"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      ,
      },
      {
        "type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "630195",
                  "name": "Champaran  Handi Restaurant",
                  "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/29/4210a054-9608-4840-b00f-0aaf9a5bd332_1bf1f7a4-c59f-42b0-b2b8-9ac8615cbcc7.JPG",
                  "locality": "Sinchai Colony",
                  "areaName": "Nagpur road",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "North Indian"
                  ],
                  "avgRating": 4.3,
                  "parentId": "376324",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "424",
                  "promoted": true,
                  "adTrackingId": "cid=31899068~p=0~adgrpid=31899068#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=630193~plpr=COLLECTION~eid=d00cdaee-f42b-4607-a55c-5f41ae3e779b~srvts=1754894196080~collid=83639",
                  "sla": {
                    "deliveryTime": 39,
                    "lastMileTravel": 11.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "11.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2025-08-11 23:00:00",
                    "opened": true
                  },
                  "badges": {
    
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {
    
                  },
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "textBased": {
    
                      },
                      "imageBased": {
    
                      },
                      "textExtendedBadges": {
    
                      }
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {
    
                    },
                    "subTitle": {
    
                    },
                    "message": {
    
                    },
                    "customIcon": {
    
                    },
                    "commsStyling": {
    
                    }
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
    
                      },
                      "video": {
    
                      }
                    }
                  },
                  "reviewsSummary": {
    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  "campaignId": "31899068"
                },
                "analytics": {
    
                },
                "cta": {
                  "link": "swiggy://menu?restaurant_id=630193&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
              ,
              "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
              }
        } ,
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                  "id": "234876",
                  "name": "Adil Hotel",
                  "cloudinaryImageId": "lln3zxpll8pshaeqrgr9",
                  "locality": "Rautha Wada",
                  "areaName": "Chhindwara Locality",
                  "costForTwo": "₹150 for two",
                  "cuisines": [
                    "Biryani",
                    "Tandoor"
                  ],
                  "avgRating": 4.4,
                  "parentId": "27123",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "1.3K+",
                  "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 11.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "11.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2025-08-12 00:00:00",
                    "opened": true
                  },
                  "badges": {
    
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {
    
                  },
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
    
                      },
                      "textExtendedBadges": {
    
                      },
                      "textBased": {
    
                      }
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {
    
                    },
                    "subTitle": {
    
                    },
                    "message": {
    
                    },
                    "customIcon": {
    
                    },
                    "commsStyling": {
    
                    }
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
    
                      },
                      "video": {
    
                      }
                    }
                  },
                  "reviewsSummary": {
    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
    
                },
                "cta": {
                  "link": "swiggy://menu?restaurant_id=234875&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food",
              "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
              }
        },
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                  "id": "658211",
                  "name": "The Fusion Lounge",
                  "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/b7f823ab-9291-4be3-bb39-e5415ca70c35_5a6a3c4d-1a35-44c7-b7f0-02fd55b9fc83.JPG",
                  "locality": "Triloki nagar",
                  "areaName": "Railway Station",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                    "South Indian",
                    "Chinese",
                    "Beverages",
                  ],
                  "avgRating": 4.1,
                  "parentId": "395453",
                  "avgRatingString": "4.1",
                  "totalRatingsString": "356",
                  "promoted": true,
                  "adTrackingId": "cid=31899069~p=1~adgrpid=31899069#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=658210~plpr=COLLECTION~eid=a5816d52-9681-4a9e-8647-968ddf0b197d~srvts=1754894196080~collid=83639",
                  "sla": {
                    "deliveryTime": 56,
                    "lastMileTravel": 11.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "55-65 mins",
                    "lastMileTravelString": "11.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2025-08-11 23:00:00",
                    "opened": true
                  },
                  "badges": {
    
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {
    
                  },
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "textExtendedBadges": {
    
                      },
                      "textBased": {
    
                      },
                      "imageBased": {
    
                      }
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {
    
                    },
                    "subTitle": {
    
                    },
                    "message": {
    
                    },
                    "customIcon": {
    
                    },
                    "commsStyling": {
    
                    }
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
    
                      },
                      "video": {
    
                      }
                    }
                  },
                  "reviewsSummary": {
    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  "campaignId": "31899069"
                },
                "analytics": {
    
                },
                "cta": {
                  "link": "swiggy://menu?restaurant_id=658210&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
              ,
              "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
              }
        } ,
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                  "id": "946889",
                  "name": "Sunfire Rooftop Restaurant",
                  "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/5/dbc149ab-20bb-4a19-81ae-4ada60c3c2e1_dca5cedc-d25b-499d-9531-5e0f3c845caa.jpg",
                  "locality": "Venkatesh Mall",
                  "areaName": "Chhindwara City",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Biryani",
                    "Tandoor",
                    "French",
                    "Snacks",
                  ],
                  "avgRating": 3.7,
                  "veg": true,
                  "parentId": "490985",
                  "avgRatingString": "3.7",
                  "totalRatingsString": "12",
                  "sla": {
                    "deliveryTime": 42,
                    "lastMileTravel": 11.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-50 mins",
                    "lastMileTravelString": "11.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2025-08-11 23:00:00",
                    "opened": true
                  },
                  "badges": {
    
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "textBased": {
    
                      },
                      "imageBased": {
    
                      },
                      "textExtendedBadges": {
    
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹131 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL",
                    "logoCtx": {
                      "text": "BENEFITS"
                    }
                  },
                  "orderabilityCommunication": {
                    "title": {
    
                    },
                    "subTitle": {
    
                    },
                    "message": {
    
                    },
                    "customIcon": {
    
                    },
                    "commsStyling": {
    
                    }
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
    
                      },
                      "video": {
    
                      }
                    }
                  },
                  "reviewsSummary": {
    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
    
                },
                "cta": {
                  "link": "swiggy://menu?restaurant_id=946888&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food",
              "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
              } 
        },
        {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                  "id": "864618",
                  "name": "Sab Ghar Tak Foods",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/04109fba-1c29-43b5-a800-2446374aa978_864617.jpg",
                  "locality": "Dadra and Nagar Haveli",
                  "areaName": "Chhindwara City",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                    "Chinese",
                    "Biryani",
                    "Indian",
                    "Beverages",
                    "Tandoor"
                  ],
                  "avgRating": 4.1,
                  "parentId": "173932",
                  "avgRatingString": "4.1",
                  "totalRatingsString": "20",
                  "sla": {
                    "deliveryTime": 53,
                    "lastMileTravel": 14.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-60 mins",
                    "lastMileTravelString": "14.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2025-08-11 23:00:00",
                    "opened": true
                  },
                  "badges": {
    
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "textBased": {
    
                      },
                      "imageBased": {
    
                      },
                      "textExtendedBadges": {
    
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹50 OFF",
                    "subHeader": "ABOVE ₹199",
                    "discountTag": "FLAT DEAL"
                  },
                  "orderabilityCommunication": {
                    "title": {
    
                    },
                    "subTitle": {
    
                    },
                    "message": {
    
                    },
                    "customIcon": {
    
                    },
                    "commsStyling": {
    
                    }
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
    
                      },
                      "video": {
    
                      }
                    }
                  },
                  "reviewsSummary": {
    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
    
                },
                "cta": {
                  "link": "swiggy://menu?restaurant_id=864617&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food",
              "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
              }
        }
]

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


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
