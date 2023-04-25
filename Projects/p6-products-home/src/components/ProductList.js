import "../App.css";
import ProductItem from "./ProductItem";

const productData = [
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%",
    imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/e/h/h/l-hlts002640-highlander-original-imagngnbk7fyyedg.jpeg?q=70"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%",
    imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/w/8/h/m-2115-the-dry-state-original-imagzgz9va6ugfxd.jpeg?q=70"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%",
    imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/w/8/h/m-2115-the-dry-state-original-imagzgz9va6ugfxd.jpeg?q=70"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%",
    imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/c/p/m-db1024-15-3bros-original-imagz8zjfxthf7kn.jpeg?q=70"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%",
    imageUrl: "https://rukminim1.flixcart.com/image/612/612/l2rwzgw0/t-shirt/f/p/v/s-ht18mkgrabem01149-huetrap-original-imagefqr3wrnub6d.jpeg?q=70"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%",
    imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/3/h/0/xxl-mt23-p101-lgrey-alan-jones-original-imagm4hwc875dh2c.jpeg?q=70"
  },
  {
    name:"Regular T Shirt", 
    brand:"Roadstar", 
    price:350, 
    discountedPrice:450, 
    discountedPercentage:"45%",
    imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/w/8/h/m-2115-the-dry-state-original-imagzgz9va6ugfxd.jpeg?q=70"
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