import '../style.css'


export const Item = ({id, title, price, img}) =>{
    return (
        <div class="card">
            <img src={img} alt="GPU" style={{width: "17rem"}}/>
            <div class="container d-flex flex-column justify-content-between">
                <p class="item__name">{title}</p>
                <p class="item__price text-center">{price}</p>
                <button href="#" class="btn btn-success m-auto">Add to cart</button>
            </div>
        </div>
    );
}



