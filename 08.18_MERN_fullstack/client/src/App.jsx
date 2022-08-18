import { useState } from 'react';
import './App.css';

function App() {
  const [msg,setMsg] = useState('')
  const [msgBack,setMsgBack] = useState('')

  const onClickHandler = e => {
    fetch('http://localhost:5000')
    .then(data=>data.json())
    .then(data=>{
      
      setMsg(data)
      console.log(data)
    })
    .catch(err=>{
      // console.log(err)
      setMsg(err)
    })
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    const msg={msg: e.target.msg.value}
    fetch('http://localhost:5000', {
      method:'POST',
      body:JSON.stringify(msg),
      headers:{
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      setMsgBack(data.msg)
    })

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Landing Page</h1>
        <button onClick={onClickHandler}>MSG from BankEnd</button>
        {
          msg && <h1>{msg}</h1>
        }

        <form onSubmit={onSubmitHandler}>
          <label htmlFor="">Massage for BackEnd</label>
          <input type="text" name='msg'/>
          <button type="submit">Send</button>
        </form>
        {
          msgBack && <h1>{msgBack}</h1>
        }
      </header>
    </div>
  );
}

export default App;
