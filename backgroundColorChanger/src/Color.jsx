function Color({colorName,setColor}){
    return(
        <span className="w-20 px-3 rounded-lg cursor-pointer font-bold py-1 my-2"
        style={{backgroundColor:colorName}} onClick={()=>setColor(colorName)}
        >
            {colorName}
        </span>
    )
}
export default Color