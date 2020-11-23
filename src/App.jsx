import React from 'react';
import './App.css';
import axios from 'axios';

// Outputting Arrays in JSX, simple list of items

{/*let items= ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
let itemList = [];
items.forEach((item, index) => {
  itemList.push(<li key = {index}>{item}</li>)
})
function App() {
  console.log(itemList)  
  return (        
    <>
    <h2>This is a simple list of items</h2>
    <ul>      
      {itemList}
    </ul>
    </>
  );
}
export default App;*/}

// Rendering Dynamic Data


function App(){
  const [userData, setUserData]=useData([]) 
 }


useEffect(()=>{
  axios.get('https://reqres.in/api/users?page=2')
    .then(res=>{
      console.log(res.data.data);
      setUserData(res.data.data)
    })
    .catch(err=>{
      console.log(err);
    })
},[])

return (
  <>
  {userData.map((data,id)=>{
    return <div key={id}>
      <h2>{data.first_name} {data.last_name}</h2>
      <p>{data.email}</p>
    </div>
  })}

  </>
);
}

export default App;