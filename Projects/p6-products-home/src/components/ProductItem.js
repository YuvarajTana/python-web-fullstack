function ProductItem(props){
  
  const { imageUrl, name, brand, price, discountedPrice, discountedPercentage } = props;

  return <div className="ProductItem">
    <div className='Product-image'>
      <img src={imageUrl} />
    </div>
    <div className='Product-info'>
      <p>{brand}</p>
      <p>{name}</p>
      <div className='Product-price-section'>
        <span>{price}</span>
        <span>{discountedPrice}</span>
        <span>{discountedPercentage}</span>
      </div>
    </div>
  </div>
}

export default ProductItem;