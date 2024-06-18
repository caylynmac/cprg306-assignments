import ItemList from "./item-list";

export default function Page(){
    return(
        <main className = "bg-green-300">
            <h1 className = "px-5 text-[50px] underline">Shopping List</h1>
            <ItemList/>
        </main>
    )
}