import React,{useEffect,useState} from "react";
import axios from "axios";
import "./KycGet.css";
const apiUrl = "https://localhost:7180/api/Welcome";

 


const KycGet=({setdata,fun})=>{
  const[users,setusers]=useState([])
 function getdata() {
    axios
      .get(apiUrl + "/GetDetails")
      .then((response) => response.data)
      .then(
        (result) => {
          setusers(result)
           
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  useEffect(()=>{
  getdata()
  },[fun])
  function deleteUser(tbId) {
    console.log(tbId)
    axios.delete(`${apiUrl}/DeleteCustomerDetails?uid=${tbId}`).then((result) => {
      alert(result.data);
      setusers(users.filter((user) => user.tbId !== tbId))
    });
  }


  function UpdateUser(data) {
    console.log("data",data)
    setdata(data)
    // const { users } = this.state;
    // axios.put(`${apiUrl}/UpdateEmployeeDetails`,{
    //   regCustomerId: data.tbCustomerId,
    //   regCustomername: "",
    //    regGender: "",
    //    regMobile: "",
    //    regDocumentType: "",
    //    regIdNumber: "",
    // }).then((result) => {
    //   alert(result.data);
    //   // this.setState({
    //   //   response: result,
    //   //   users: users.filter((user) => user.tbId !== tbId),
    //   // });
    // });
  }
  return(
    <>
     <div id="tbls">
          <table>
            <thead className="btn-primary">
              <tr>
                <th>Customer Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Mobile Number</th>
                <th>Document Type</th>
                <th>ID Number</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.tbId} data-testid="userrow">

                  <td>{user.tbCustomerId}</td>
                  <td>{user.tbCustomername}</td>
                  <td>{user.tbGender}</td>
                  <td>{user.tbMobile }</td>
                  <td>{user.tbDocumentType}</td>
                  <td>{user.tbIdNumber}</td>
                  <td>
                    <div>
                    <button
                      variant="danger"
                      onClick={() => deleteUser(user.tbId)}
                    >
                      Delete
                    </button>

                    </div>
                  </td>

                  <td>
                    <div>
                    <button
                      variant="danger"
                      onClick={() => UpdateUser(user)}
                    >
                      Edit
                    </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </>
  )


}


export default KycGet;