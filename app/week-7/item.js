export default function Item({name, quantity, category, onSelect}){

    //pass item info back to event handler on item list then page when clicked

    const listStyles = "p-4 m-4 max-w-80 bg-green-100 text-green-400 rounded-xl"
    return(
        <button onClick = {onSelect}>
            <div>
                <ul className = {listStyles}>
                    <li className = "text-xl">{name}</li>
                    <li className = "text-sm italic">Buy {quantity} in {category}</li>
                </ul>
            </div>
        </button>
    );
}