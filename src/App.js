import './App.css';
import {useState} from 'react';
import Display from './components/Display';
import Form from './components/Form';

function App() {
  // const arr = 
  const [list, setList] = useState([
    {content: 'conquer world', complete: false},
    {content: 'be amazing', complete: false}
  ])
  return (
    <>
      <header>
        To Do List
      </header>
      <nav>
        link | link | link
      </nav>
      <main>
        <Display list={list} setList={setList}/>
        <Form list={list} setList={setList}/>
      </main>
    </>
  );
}

export default App;
