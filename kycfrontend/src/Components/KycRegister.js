import React, { useState,useRef,useEffect  } from 'react';
import "./KycRegister.css"
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const KycRegister=({data,setfun})=>{
  const apiUrl = "https://localhost:7180/api/Welcome";
  const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

    return [ htmlElRef, setFocus ] 
}

  const [inputRef, setInputFocus] = useFocus()
    const[customer, setCustomer]=useState({
      regId:"",
      regCustomerId: "",
      regCustomername: "",
       regGender: "",
       regMobile: "",
       regDocumentType: "",
       regIdNumber: "",
    })

    const options = [
      { value: 'Pan', label: 'Pan' },
  { value: 'Aadhar', label: 'Aadhar' },

     
    ];
    useEffect(()=>{
      console.log("data from kycregister",data)
      // if (data.l)
      editChange()
    },[data])
    
    function editChange() {
      setCustomer({
        regCustomerId:data.tbCustomerId,
        regCustomername:data.tbCustomername,
        regDocumentType:data.tbDocumentType,
        regGender:data.tbGender,
        regMobile:data.tbMobile,
        regIdNumber:data.tbIdNumber,
        regId:data.tbId


      })

    }

    function UpdateUser() {
      console.log("customer",customer)
       
      // const { users } = this.state;
      axios.put(`${apiUrl}/UpdateEmployeeDetails`,{
        "regId": customer.regId,
        "regCustomerId": customer.regCustomerId,
        "regCustomername": customer.regCustomername,
        "regGender": customer.regGender,
        "regMobile": customer.regMobile,
        "regDocumentType": customer.regDocumentType,
        "regIdNumber": customer.regIdNumber
      
      }).then((result) => {
        alert(result.data);
        setfun(true)
        // this.setState({
        //   response: result,
        //   users: users.filter((user) => user.tbId !== tbId),
        // });
      });
    }
   // const defaultOption = options[0];

    
const {regCustomerId,regCustomername,regMobile,regIdNumber}=customer;

function OnClicker() {

  var txt = document.getElementById("cd1").required=("please enter your PAN or Aadhar");
                         
        document.getElementById("Hello").innerHTML = txt;

        var txt4 = document.getElementById("cd4").required=("Alpha Characters and space Allowed");
                         
        document.getElementById("Hello4").innerHTML = txt4;

        var txt1 = document.getElementById("cd2").required=("Enter Only the Alpha and Numeric characters");
                         
        document.getElementById("Hello1").innerHTML = txt1;

  var txt3 = document.getElementById("numb").required=("Please Enter only 10 digit Number");
                         
  document.getElementById("demo").innerHTML = txt3;

  let x = document.getElementById("numb").value;
  let text;
     if (isNaN(x) || x < 1 || x > 10) {
      text = "Please Enter only 10 digit Number";
            } else {
          text = "Input Valid";
          }
       document.getElementById("demo").innerHTML = text;
          }


    const oninputChange= e=>{
    setCustomer({...customer,[e.target.name]: e.target.value});
    }
    const onSubmit = async =>{
        
       axios.post("https://localhost:7180/api/Welcome/InsertDetails",customer);
        alert ("Data inserted Successfully");
    };



    // render() {
    //   let pageTitle;
    //   let actionStatus;
    //   if (this.state.componentCode) {
    //       pageTitle = <h2>Edit User</h2>;
    //       actionStatus = <b>Update</b>;
    //   } else {
    //       pageTitle = <h2>Register</h2>;
    //       actionStatus = <b>Save</b>;
    //   }    
  
   
    return(
       <div id='color'>
            <div className='text-center'>
                <h2>KYC Registration Form</h2>
                <form onSubmit={e =>onSubmit(e)}>
            
                <div className="form-group">
                    
                   
                    <input ref={inputRef} type="text" id='cd2'  placeholder="Customer Id"  name="regCustomerId"value={regCustomerId}
                    onChange={e =>oninputChange(e)}
                    />    
                    <p onClick={OnClicker} id="Hello1"></p>
                             
                </div>
                <br/>
                
                

                <div>
                   <input type ="text"
                    placeholder="Name"
                    name="regCustomername"value={regCustomername}
                    id='cd4'
                    onChange={e =>oninputChange(e)}
                    />
                    <p onClick={OnClicker} id="Hello4"></p>
                </div>
                <br/>
                
     
      <div>
        <label >Gender</label>
        <input type="radio" value="male" name="regGender" onChange={e =>oninputChange(e)} /> Male
        <input type="radio" value='female' name="regGender" onChange={e =>oninputChange(e)} /> Female
        <input type="radio" value="other" name="regGender" onChange={e =>oninputChange(e)} /> Other
      </div>

      <br/>
  {/* { console.log (customer) } */}

                <div>
                   <input type ="text" 
                   maxlength="10"
                   id='numb'
                    placeholder="Mobile Number"
                    name="regMobile"
                    value={regMobile}
                    onChange={e =>oninputChange(e)}
                    />
                    <p onClick={OnClicker} id="demo"></p>  
                </div> 
                <br/>
                {
          customer.regMobile !=undefined && customer.regMobile.length<11?(<>
          <span>Enter 10 Digit Numbers</span>
          </>): (<></>)
        }



                <div className='drops'>

                  <label>Document Type</label>
                <Dropdown options={options}  name='regDocumentType' onChange={(value) => setCustomer({...customer,
                  regDocumentType:value.value})} value={customer.regDocumentType} placeholder="Select an option" />
                   {/* <input type ="text"
                    placeholder="DocumentType"
                    name="regDocumentType"
                    value={regDocumentType}
                    onChange={e =>oninputChange(e)}
                    /> */}
                </div>
                <br/>
        {
          customer.regDocumentType==="Pan"?(<>
          <span>Enter 10 Digit Numbers</span>
          <div>
                   <input type ="text" 
                   maxlength="10"
                   placeholder="ID Number"
                   name="regIdNumber"
                   id='cd1'
                   value={regIdNumber}
                    onChange={e => oninputChange(e)}
                    />
                    <p onClick={OnClicker} id='Hello'></p>
                </div>
                <br/>
          </>): customer.regDocumentType==="Aadhar"?(<><span>Enter 12 Digit Numbers</span>
            <div>
                   <input type ="text" 
                   maxlength="12"
                   placeholder="ID Number"
                   name="regIdNumber"
                   id='cd1'
                   value={regIdNumber}
                    onChange={e => oninputChange(e)}
                    />
                    <p onClick={OnClicker} id='Hello'></p>
                </div>
                <br/>
          </>):(<><div>
                   <input type ="text" 
                   maxlength="12"
                   placeholder="ID Number"
                   name="regIdNumber"
                   id='cd1'
                   value={regIdNumber}
                    onChange={e => oninputChange(e)}
                    />
                    <p onClick={OnClicker} id='Hello'></p>
                </div>
                <br/></>)
        }

             
                
               <button className='btn' onClick={OnClicker}>Submit</button>
              

                </form>
                {/* <button className='btn' onClick={setInputFocus}>Edit</button> */}
            
                </div>
                <button id="butnedit" className='btn' onClick={UpdateUser}>Edit</button>
               
        </div>
    )
       
                  }

export default KycRegister;