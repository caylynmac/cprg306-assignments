export default function Item({name, quantity, category}){

    const listStyles = "p-4 m-4 max-w-80 bg-green-100 text-green-400 rounded-xl"
    return(
        <div>
            <ul className = {listStyles}>
                <li className = "text-xl">{name}</li>
                <li className = "text-sm italic">Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}