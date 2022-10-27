import './App.css';
import {InputForm} from "./components/InputForm";
import {Message} from './components/Message';
import React, {useState} from "react";

export const App = () => {
  const [messageList, setMessages] = useState([]);

  const handleNewMessage = (data) => {
    let newId = messageList.length === 0
      ? 0 : messageList[messageList.length - 1].id + 1;
    setMessages(prevState =>
      [...prevState, {
        'id': newId,
        'author': data.author,
        'message': data.message
      }]);
  }

  React.useEffect(() => {
    if (messageList.length > 0) {
      let lastAuthor = messageList[messageList.length - 1].author;
      if (lastAuthor !== "App_bot") {
        setTimeout(() =>
          handleNewMessage({
            'author': 'App_bot',
            'message': `Hello, ${lastAuthor}!`
          }), 1500
        )
      }
    }
  })

  return (
    <div className="App">
      <InputForm onSubmit={handleNewMessage}/>
      {messageList.map((item) =>
        <Message msg={item} key={item.id}/>)}
    </div>
  );
}