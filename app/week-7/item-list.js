"use client";
import React from "react";
import Item from "./item";
import { useState } from "react";

export default function ItemList({items, onItemSelect}){
    //map state prop to an array
      let itemArray =items.map((item)=>({...item}));

      let [sortBy, setSortBy] = useState("name");

      let sortButtonClicked = (event) => setSortBy(event.target.value)

      itemArray = itemArray.sort((a, b) => { 
		    if (isNaN(parseInt(a[sortBy]))) { //where sortBy is equal to name or category property

		      // convert to uppercase to sort alphabetically by ASCII
		      let itemA = a[sortBy].toUpperCase(); //a[sortBy] accesses the value of that property for that object
		      let itemB = b[sortBy].toUpperCase(); 
		      if (itemA < itemB) {
		        return -1;
		      }
		      if (itemA > itemB) {
		        return 1;
		      }
		      return 0;
		    } else { //sort by id if somehow name or category is a number
		        return a.id - b.id;
		    }
  });

    

  let buttonStyleUnclicked = "border-2 border-black w-28 rounded-xl p-2 text-black";
  let buttonStyleClicked = "border-2 border-black bg-black w-28 rounded-xl p-2 text-green-300";

  let nameButton = (sortBy==="name") ? buttonStyleClicked : buttonStyleUnclicked;
  let categoryButton = (sortBy==="category") ? buttonStyleClicked : buttonStyleUnclicked;


      return(
        <div>
          <div className="flex gap-5 m-4 items-center text-black">
            <p>Sort by</p>
            
            <button className={nameButton} value="name" onClick={sortButtonClicked}>name</button>
            <button className={categoryButton} value="category" onClick={sortButtonClicked}>category</button>
          </div>
          <ul>
          {itemArray.map((item) => (
             <li key={item.id} onClick={() => onItemSelect(item)}>
		          <Item name={item.name} quantity={item.quantity} category={item.category}/>
              </li>
          ))}
          </ul>
        </div>

      );
}