import "../../../App.css";
function Category(){
  return <div className="Category">
    <h5>CATEGORIES</h5>
    <div>
      <div>
        <input htmlFor="tShirts" type="checkbox" />
        <label id="tShirts">T Shirts</label>
      </div>
      <div>
        <input htmlFor="longuetShirts" type="checkbox" />
        <label id="longuetShirts">Longue T Shirts</label>
      </div>
    </div>
  </div> 
}

export default Category;