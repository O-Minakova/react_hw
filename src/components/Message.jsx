import './Message.css';

export const Message = ({msg}) => {
  return <div className="msg">
    <div><p className="msg_author">{msg.author}</p></div>
    <div><p className="msg_content">{msg.message}</p></div>
  </div>
}