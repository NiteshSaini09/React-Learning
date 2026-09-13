import './Product.css'
function Product(pr){
    return(
        <div className="container">
            {console.log(pr)}
            <h3>{pr.name}</h3>
            <p>{pr.desc}</p>
        </div>            
    )
}

export default Product