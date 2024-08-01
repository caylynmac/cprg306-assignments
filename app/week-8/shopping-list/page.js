"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; //for adding to and comparing to data in itemlist
import { useState } from "react";
import MealIdeas from "./meal-ideas";


export default function Page(){

    //state variables for items list
    let [items, itemsUpdate] = useState(itemsData.map((item)=>({...item})));
    let [selectedItemName, selectedItemUpdate] = useState("");

    //event handler prop for new item form to add item
    const handleAddItem = (newItem)=> {
        //copy array, update state
        itemsUpdate([...items, newItem]);
      }

      //event handler to select an item
      function handleItemSelect(item) {
        //extract name, trim it
        let text = item.name;
        text = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[0-9])/gi, ' ');
        text = text.split(",");
        let trimmedName = text[0].trim();
        
        //update state
        selectedItemUpdate(trimmedName);
      }
    return(
        <main className = "bg-green-300">
            <div className="flex">
            <div className = "flex-col">
                <div ><h1 className = "px-5 text-[50px] underline">Shopping List</h1></div>
                <div><NewItem onAddItem = {handleAddItem}/></div>
                <div><ItemList items = {items} onItemSelect={handleItemSelect}/></div>
            </div>
            <div className="w-80"><MealIdeas ingredient = {selectedItemName}/></div>
            </div>
        </main>
    )
}