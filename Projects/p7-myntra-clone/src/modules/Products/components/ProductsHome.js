import React from 'react';
import BreadCrumb from "./Breadcrumb";
import ProductFilter from "./ProductFilter";

function ProductsHome(){
  return <div className='ProductHome'>
    <BreadCrumb></BreadCrumb>
    <ProductFilter></ProductFilter>
  </div>
}

export default ProductsHome;