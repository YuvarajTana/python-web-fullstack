import "../../../App.css";
const colorList = [
  {
    colorName: "Grey",
    colorHexCode: "#b6b6b6",
  },
  {
    colorName: "Black",
    colorHexCode: "#000000",
  },
  {
    colorName: "Green",
    colorHexCode: "#74992e",
  }
];

function Color(){
  return <div className="Color">
    <h5>COLOR</h5>
    <div>
    {
      colorList.map((colorItem, index) => {
        const { colorName, colorHexCode } = colorItem;
        return <div className='ColorItemSec' key={index}>
          <input type="checkbox" name={colorName}/>
          <p className='Color-item' style={{backgroundColor: `${colorHexCode}`}}></p>
          <p>{colorName}</p>
        </div>
      })
    }
    </div>

  </div> 
}

export default Color;