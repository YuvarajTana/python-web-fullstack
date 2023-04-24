import "../App.css";
import ProductItem from "./ProductItem";
const productData = [
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%"
  }

];
function ProductList(props){

  return <div className="ProductList">
    {
      productData.map(item => {
        return <ProductItem {...item}></ProductItem>
      })
    }
  </div> 
}

export default ProductList;