"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; //for adding to and comparing to data in itemlist
import { useState } from "react";


export default function Page(){

    //1) state variable for items list
    let [items, itemsUpdate] = useState(itemsData.map((item)=>({...item})));

    //2) event handler prop for new item form to add item
    const handleAddItem = (newItem)=> {
        //copy array, update state
        itemsUpdate([...items, newItem]);
      }
    return(
        <main className = "bg-green-300">
            <h1 className = "px-5 text-[50px] underline">Shopping List</h1>
            <NewItem onAddItem = {handleAddItem}/>
            <ItemList items = {items}/>
        </main>
    )
}