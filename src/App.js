import './App.css';
import { useState, useEffect } from 'react';
import FacebookCard from './components/FacebookCard';


//Main function
function App() {
  //Create State for Store data which we fetch from API
  const [allData, setAllData] = useState([])

  //Use useEffect's initial stage for call API for one just when component is rendor first time 
  useEffect(() =>{
     getDataFromApi()
  },[])

  //Create arrow function for call API
  const getDataFromApi = () => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then (res => setAllData(res.products)) //set data on state's method setAllData
  }

  //Apply condition when there is no data bcz when componenet rendor first time they don't call API
  if(!allData.length){
    return <div>
      <img src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif'/>
    </div>
  }
  
  //return all things
  return (
    <div className='App'>
      {allData.map((item)=>{
        return <FacebookCard title = {item.title} brand = {item.brand} description = {item.description} price ={item.price} discount ={item.discountPercentage} rating ={item.rating} stock={item.stock}  images = {item.images} category ={item.category} />
      })}  
      {console.log(allData)}
    </div>
  )
}
export default App;
