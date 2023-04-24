import FilterList from "./FilterList";
import ProductList from './ProductList';
import "../App.css";
function ProductFilter(){
  return <div className="ProductFilter">
    <FilterList></FilterList>
    <ProductList></ProductList>
  </div>
}

export default ProductFilter;