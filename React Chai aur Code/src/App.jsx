import './App.css'
import ProductList from './ProductList.jsx'
import Sample from './sample'
let products=[
  {name:"iPhone",desc:"iphone 16"},
  {name:"Laptop",desc:"Lenovo ideaPad slim 3"},
  {name:"Charger",desc:"33 watt fast charger"},
  {name:"Bottal",desc:"Water bottal in steal body"}
]
function App(){
  return (
    <>
      {/* <Sample/> */}
      <ProductList products={products}/>
    </>
  )
}
export default App