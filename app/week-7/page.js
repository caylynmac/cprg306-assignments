"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; //for adding to and comparing to data in itemlist
import { useState } from "react";
import MealIdeas from "./meal-ideas";


export default function Page(){

    //state variables for items list
    let [items, itemsUpdate] = useState(itemsData.map((item)=>({...item})));
    let [selectedItemName, selectedItemUpdate] = useState(null);

    //event handler prop for new item form to add item
    const handleAddItem = (newItem)=> {
        //copy array, update state
        itemsUpdate([...items, newItem]);
      }

      const handleItemSelect = (name)=> {
        //extract name, trim it
        let itemNameTrimmed = name;

        console.log(itemNameTrimmed.name);
        //update state
        //selectedItemUpdate(itemName);
      }
    return(
        <main className = "bg-green-300">
            <div className="flex">
            <div className = "flex-col">
                <div ><h1 className = "px-5 text-[50px] underline">Shopping List</h1></div>
                <div><NewItem onAddItem = {handleAddItem}/></div>
                <div><ItemList items = {items} onItemSelect={handleItemSelect}/></div>
            </div>
            <div className="w-80"><MealIdeas ingredient = {"chicken"}/></div>
            </div>
        </main>
    )
}31