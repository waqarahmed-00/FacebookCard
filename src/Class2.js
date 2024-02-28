// reverse function  
/*function App(){

    const [text, setText] = useState("Waqar")
    function reverseFun(){
      const reverse = text.split('').reverse().join('');
      setText(reverse);
    }

    return(
        <div className="App">

        <h1>{text}</h1>
        <button onClick={reverseFun}>Reverse</button>
    
        </div>
    )
}*/

//========================================================

// Chnage Variable name using state feature
/*function App(){

    const [text , setText] = useState("Waqar");
    function textChnage(){
        setText("Rana")
    }

    return(
        <div className="App">

            <h1>{text}</h1>
            <button onClick={textChnage}> ChangeBtn </button>

        </div>
    )
}*/ 

//==============================================================

//Image Show
/*function App(){

    const [show , setShow] = useState(false);
    function showFun(){
      setShow(true);
    }

    return(
        <div className="App">

            {hide && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPK_9L7IQi-yNjIzteVauCUexNfKBjZtkQwKXsZr987p9tjGMN5Y3TqtVYns42HzUTyYo&usqp=CAU"/>}

            <button onClick={showFun}>Show</button>

        </div>
    )
}*/ 

//==============================================================

//Image Hide
/*function App(){

    const [hide , setHide] = useState(true);
    function hideFun(){
      setHide(false);
    }

    return(
        <div className="App">

            {hide && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPK_9L7IQi-yNjIzteVauCUexNfKBjZtkQwKXsZr987p9tjGMN5Y3TqtVYns42HzUTyYo&usqp=CAU"/>}

            <button onClick={hideFun}>Hide</button>

        </div>
    )
}*/ 

//==============================================================

//Image Hide
/*function App(){

    const [img, setImg] = useState(true);
    function toggleFun(){
      setImg(!img);
      ===================
      if(img === true){
        setImg(false);
      }else{
        setImg(true);
      }
    }
    }

    return(
        <div className="App">

            {img && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPK_9L7IQi-yNjIzteVauCUexNfKBjZtkQwKXsZr987p9tjGMN5Y3TqtVYns42HzUTyYo&usqp=CAU"/>}

            <button onClick={toggleFun}>Toogle</button>

        </div>
    )
}*/ 


   


