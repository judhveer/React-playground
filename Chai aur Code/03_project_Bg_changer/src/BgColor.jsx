import { useState } from "react";


function BgColor(){
    const [color, setColor] = useState("olive");
    

    return(
        <>
            <div className="h-screen w-full duration-200" style={{backgroundColor: color}}>
                <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
                    <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                        <button 
                        onClick={() => setColor("red")}
                        // onClick={setColor("red")}
                        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "red"}}>Red</button>

                        <button 
                        onClick={() => setColor("green")}
                        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "green"}}>Green</button>

                        <button 
                        onClick={() => setColor("blue")}
                        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "blue"}}>Blue</button>

                        <button 
                        onClick={() => setColor("olive")}
                        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "olive"}}>Olive</button>  

                        <button 
                        onClick={() => setColor("grey")}
                        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "grey"}}>Grey</button>  

                        <button 
                        onClick={() => setColor("Yellow")}
                        className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "Yellow"}}>Yellow</button>  

                        <button 
                        onClick={() => setColor("pink")}
                        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "Pink"}}>Pink</button>  

                        <button 
                        onClick={() => setColor("purple")}
                        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "purple"}}>Purple</button>                       

                        <button 
                        onClick={() => setColor("lavender")}
                        className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "lavender"}}>Lavender</button>  

                        <button 
                        onClick={() => setColor("white")}
                        className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "white"}}>White</button>   

                        <button 
                        onClick={() => setColor("black")}
                        className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "black"}}>Black</button>    

                    </div>
                </div>

            </div>
        </>
    )
}

export default BgColor;