import Color from "./Color.jsx";
function ColorTab({setColor}){
    return(
        <div className="border-2 min-h-15 mx-100 flex items-center justify-around flex-wrap px-2 rounded-xl bgye">
            <Color colorName="red" setColor={setColor}/>
            <Color colorName="cyan" setColor={setColor}/>
            <Color colorName="pink" setColor={setColor}/>
            <Color colorName="yellow" setColor={setColor}/>
            <Color colorName="green" setColor={setColor}/>
            <Color colorName="blue" setColor={setColor}/>
            <Color colorName="olive" setColor={setColor}/>
            <Color colorName="purple" setColor={setColor}/>
            <Color colorName="orange" setColor={setColor}/>
            <Color colorName="black" setColor={setColor}/>
            <Color colorName="white" setColor={setColor}/>
        </div>
    )
}
export default ColorTab