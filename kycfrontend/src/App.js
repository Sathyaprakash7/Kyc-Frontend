import './App.css';
import KycRegister from './Components/KycRegister'
import KycGet from './Components/KycGet';
import ImageUpload from './Components/ImageUpload';
import { useState } from 'react';
 

function App() {
  const[data,setdata]=useState([])
  const[fun,setfun]=useState(false)
  console.log("data from appjs",data)
  return (
    <div> 
         <KycRegister data={data} setfun={setfun}/>
         <KycGet setdata={setdata} fun={fun}/>  
         <ImageUpload/> 
         
         
    </div>
  );
}

export default App;
