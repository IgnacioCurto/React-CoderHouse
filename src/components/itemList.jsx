import { Item } from './item.jsx';
import '../style.css'



export const ItemList=({items}) => {
    return <div className="ListContainer">
    {    
        items.map((item, i) =>{
            return <div key={i} className="ItemContainer">
                    <Item 
                    id={item.id}
                    img={item.img} 
                    title={item.name} 
                    descr={item.description}
                    price={item.price} />
            </div>
        })
    }
    </div>
}