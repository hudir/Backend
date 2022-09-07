import React from 'react'
import { useState } from 'react'
import url from '../config/basicUrl'

export default function CreateUser() {
  const [display, setDisplay] = useState()
  const [form, setForm] = useState({})
  const formOnchange = e => setForm(p=>({...p, [e.target.name]: e.target.value}))

  const submitHandler=e=>{
    e.preventDefault()
    const obj = {
      ...form,
      name: {
        firstName: form.firstName,
        middleName: form.middleName,
        lastName: form.lastName,
      }

    }
    fetch((url+'/user/create'), {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(obj)
    })
    .then(response=>response.json())
    .then(data=>setDisplay(JSON.stringify(data)))
    .catch(err=>setDisplay(JSON.stringify(err)))
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
        <div>
          user name:  
          <input type="text" name='username' onChange={e=>formOnchange(e)}/>
        </div>
        <div>
          email:  
          <input type="text" name='email' onChange={e=>formOnchange(e)}/>
        </div>
        <div>
          first name:
          <input type="text" name='firstName' onChange={e=>formOnchange(e)}/>
        </div>
        <div>
          middle name: 
          <input type="text" name='middleName' onChange={e=>formOnchange(e)}/>
        </div>
        <div>
          last name:  
          <input type="text" name='lastName' onChange={e=>formOnchange(e)}/>
        </div>
        <div>
          password:
          <input type="text" name='password' onChange={e=>formOnchange(e)}/>
        </div>
        <div>
          age:
          <input type="number" name='age' onChange={e=>formOnchange(e)}/>
        </div>
        <div>
          role:
          <input type="text" name='role' onChange={e=>formOnchange(e)}/>
        </div>

        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
      {
        display && <p>{display}</p>
      }
    </div>
  )
}
