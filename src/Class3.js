// show hide in efficient way 
/*function App(){

    const [bulb , setBulb] = useState(true);
    function on(){
      setBulb(true);
    }
    function off(){
      setBulb(false);
    }
    function toogleFun(){
      setBulb(!bulb);
    }

    return(
        <div className="App">

            {bulb && <img src="https://cdn5.vectorstock.com/i/1000x1000/60/94/cartoon-glowing-yellow-light-bulb-vector-18016094.jpg" width='100'/>}

            {!bulb && <img src="https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png" width="100"/>}
            <br></br>

            <button onClick={on}>On</button>
            <button onClick={off}>Off</button>
            <button onClick={toogleFun}>Toggly</button>
    
        </div>
    )
}*/

//=======================================================================================
//using Ternary Operator 

/*function App() {

  const [bulb , setBulb] = useState(true);
    function on(){
      setBulb(true);
    }
    function off(){
      setBulb(false);
    }
    function toogleFun(){
      setBulb(!bulb); 
    }

  return (
    <div className="App">

            {bulb ? <img src="https://cdn5.vectorstock.com/i/1000x1000/60/94/cartoon-glowing-yellow-light-bulb-vector-18016094.jpg" width='100'/>

            : <img src="https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png" width="100"/>}
            <br></br>

            <button onClick={on}>On</button>
            <button onClick={off}>Off</button>
            <button onClick={toogleFun}>Toggly</button>

    </div>
  )

}*/

//==================================================

// inshort 
/*<div className="App">

             <img width="100" src={bulb ? "https://cdn5.vectorstock.com/i/1000x1000/60/94/cartoon-glowing-yellow-light-bulb-vector-18016094.jpg"
             : src="https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png"}/>
             
            <br></br>

            <button onClick={on}>On</button>
            <button onClick={off}>Off</button>
            <button onClick={toogleFun}>Toggly</button>

    </div>*/

//==========================================================

//oneline 
/*<div className="App">

             <img width="100" src={bulb ? bulbOnImage : bulbOffImage}/>
             
            <br></br>

            <button onClick={on}>On</button>
            <button onClick={off}>Off</button>
            <button onClick={toogleFun}>Toggly</button>

    </div>*/