{/* <div id="outer">
    <div id="inner1">
        <h1>I'm 1inside div</h1>
        <h2>i'm 1inside div2</h2>
    </div>
    <div id="inner2">
        <h1>I'm 2inside div</h1>
        <h2>i'm 2inside div2</h2>
    </div>
</div> */}


// Nested 
import React from "react";
import ReactDOM from "react-dom/client"
const heading2 = React.createElement("div" , {id:"outer"} , [ 
    React.createElement("div" , {id : "inner"} , 
    [React.createElement("h1" , {}  , "I'm inside div"),
    React.createElement("h1" , {}  , "I'm inside div2")] 
    ),
    React.createElement("div" , {id : "inner"} , 
        [React.createElement("h1" , {}  , "I'm inside div"),
        React.createElement("h1" , {}  , "I'm inside div2")] 
        )]
)

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(heading2);

// const heading = React.createElement("h1" , {id:"heading"} , "Hello From React");
// //console.log(heading);
// const root =  ReactDOM.createRoot(document.getElementById("root"));
// // It's used to create a root for rendering React components in the DOM.
// console.log(root);
// root.render(heading);
