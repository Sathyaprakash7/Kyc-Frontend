import React, { useState } from "react";
import './ImageUpload.css';


function ImageUpload(){
    const [data,setData]=useState();
    console.log(data)
    return(
        <div className="main">
            <p className="proof" >ID Proof</p>
            <div className="uploadimage">
                <label htmlFor="imgs">Upload Image Here</label>
            </div>
            <input id="imgs" type="file" accept="image/png, image/jpeg,.txt,.doc" onChange={(e)=>setData(e.target.files)} />
        </div>
    );
}
export default ImageUpload;