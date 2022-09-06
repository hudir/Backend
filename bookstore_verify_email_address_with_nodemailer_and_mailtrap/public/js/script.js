// console.log(document.getElementById('register'))

// document.getElementById('register').addEventListener('submit', event=>{
//     event.preventDefault()
//     const obj = {
//         name: event.target.name.value,
//         email: event.target.email.value,
//         address: {
//             country: event.target.country.value,
//             city: event.target.city.value
//         },
//         phone: event.target.phone.value
//     }

//     // console.log(111)
//     fetch('http://localhost:3000/register', {
//         method: 'POST',
//         body: JSON.stringify(obj),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => document.getElementById('display').textContent=JSON.stringify(json))
//         .catch(err=>document.getElementById('display').textContent=JSON.stringify(err))
 
// })
