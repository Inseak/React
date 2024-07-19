import { useState } from 'react';
import './App.css';
import ListItems from './components/ListItems'
import Lifecycle from './01_Lifecycle';


function App() {
  let b = 1;

  function changeName() {
    setClassname('KH A CLASS');
    // classname = 'KH A CLASS';
    // console.log(classname);
    // document.querySelector("h1").innerText = classname;
  }
  // let classname = 'KH C CLASS'
  let [classname, setClassname] = useState('KH C CLASS');

  let array = ['게시글 제목 1', '게시글 제목 2', '게시글 제목 3'];

  return (
    <div className="App" style={{ backgroundColor: 'black', color: 'white' }}>
      {/* 00 */}
      <br />
      <h1>{classname}</h1>
      <ul>
        <ListItems array={array}></ListItems>
      </ul>
      <button onClick={() => {
        console.log('hello react');
      }}>버튼</button>
      <button onClick={changeName}>버튼2</button>

      <Lifecycle></Lifecycle>

    </div>
  );
}

export default App;
