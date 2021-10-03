import React,{useEffect,useState} from 'react';
import Item from './item'
import { ItemList } from './itemList';
import geforce1 from '../img/items/GeForce1.png'
import geforce2 from '../img/items/GeForce2.png'

export const ItemListContainer = ({greeting}) => {

    const getItems = () =>{
        return new Promise ((resolve, reject) =>{
            setTimeout(()=> resolve(
            [{id:1, 
            img: geforce1,
            name: 'ASUS - TUF gaming GeForce RTX 3060',  
            price:'$240,000'},
            {
            id:2, 
            img: geforce2,
            name: 'GIGABYTE - GeForce RTX 3080',  
            price:'$405,000'}
            ]
            //delay de 2s
            ),2000)
        })
    }

    const [items, setItems] = useState([]);
        useEffect(()=>{
            getItems().then(data =>{
                setItems(data)})
        },[])

    return ( 
        <section>
            {greeting}
            <h2 class="mt-4 text-center" style={{color: "white", fontFamily:"'Lato', sans-serif"}}>Graphic cards</h2>
            <ItemList items={items}/>
        </section>
    );
}

export default ItemListContainer;