"use client";
import { useState } from "react";

export default function NewItem({onAddItem}){
    const [name, setName] = useState(""); //you can change the elements of a const array
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        //create item object
        const item = {
            name: name,
            quantity: quantity,
            category: category,
            id: Math.random().toString().substring(2,5)
        }
        
        //3) use add item prop to update shared items state variable in parent
        onAddItem(item);

        //reset form
        setName("");
        setQuantity(1);
        setCategory("produce");
      };

    const nameChange = (event) => {
        setName(event.target.value);
    }
    const quantityChange = (event) => {
        setQuantity(event.target.value);
    }
    const categoryChange = (event) => {
        setCategory(event.target.value);
    }
    
    
      return (

        <form onSubmit={handleSubmit} className="p-4 m-4 h-48 max-w-80 bg-green-100 text-green-400 rounded-xl grid grid-cols-1 gap-4">
            <input type="text" placeholder="Item name" value={name} onChange={nameChange} required className="rounded-xl p-2"/>
            <div className = "grid grid-cols-2 gap-4">
            <input type="number" min={1} max={99} value={quantity} onChange={quantityChange} required className="rounded-xl p-2"/>
            <select value={category} onChange={categoryChange} required className="rounded-xl p-2">
            <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
            </div>
          <input type="submit" value="+" className="bg-green-300 text-green-100 rounded-xl"/>
        </form>
);
    
}