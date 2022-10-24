import './App.css';
import { Message } from './components/Message';
import { useState } from "react";

export const App = () => {
  const [name, setName] = useState('Olga');

  const handleChangeName = (ev) => {
    setName(ev.target.value)
  }

  return (
    <div className="App">
      <Message name={name} />
      <input className="nameInput" type="text" name="name" value={name} onInput={handleChangeName}/>
    </div>
  );
}