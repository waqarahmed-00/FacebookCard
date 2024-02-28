import logo from './logo.svg';
import './App.css';
import { isValidElement, useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';

function App() {

  const [list, setList] = useState([])
  const [inputText, setInputText] = useState()
  const [editMode, setEditMode] = useState()
  const [currentIndex , setCurrentIndex] = useState(false);


  function addItem(){
    const copyList = [...list]
    copyList.push(inputText)
    setList(copyList)

    setInputText('')
  }

  function updateText(e){
    const value = e.target.value;
    setInputText(value);
  }

  function deleteItem(index){
    setList([''])
  }

  function editItem(index){
    const copyList = [...list]
    const value = copyList[index]
    setInputText(value)

    setEditMode(true)

    setCurrentIndex(index);

    
  }

  function updateItem(){
    const copyList = [...list]
    copyList[currentIndex] = inputText
    setList(copyList)
    setEditMode(false)

    setInputText('')
  }

  function deleteAll(){
    const copyList = [...list]
    copyList.splice(0 , list.length)
    setList(copyList)
    
  }
  

  return (
    <div className='App'>
      <div className='App-header'>
        
        <input value={inputText} onChange={updateText} placeholder='Enter any Item'></input>
        { editMode ? <button onClick={updateItem}>Update</button>
        : <button onClick={addItem}>Add</button>}
        <button onClick={deleteAll}>Delete All</button>

        <ol>
          {list.map(function(item , index){
            return <li className= {editMode && currentIndex === index ? 'listItem' : ''}>
              {item}
              <button onClick={() => deleteItem(index)}>Delete</button>
              <button onClick={() =>editItem(index)}>Edit</button>
              </li>
          })}
        </ol>
      </div>
    </div>
  )

}
export default App;





//==================================================================================
/*.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

.listItem{
  background-color: orangered;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
*/