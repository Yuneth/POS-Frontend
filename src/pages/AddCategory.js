import React, { useState } from 'react';
import '../pages/css/Registration.css';
import { addCategory } from '../services/services';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddCategory() {

  const [catId, setCatId] = useState("");
  const [catName, setcatName] = useState("");
  const [catPic,setCatPic]= useState("");


  const setDefault = () => {
    setCatId("")
    setcatName("")
  }

  const navigate = useNavigate();

  const validate = (e) => {

    e.preventDefault()
    if (catName && catPic) {
      callApi()
    }
    else {
      //alert("Enter details")

      //Error 
      toast.error("Enter details");
    }
  }

  const callApi = () => {
    // let data = {
    //   // CatId:catId,
    //   name: catName,
    //   photo: catPic
    // }

    
    let data = new FormData();
    data.append("name", catName);
    data.append("file", catPic);
    
    console.log(data)

    addCategory(data)
      .then((res) => {
        if (res) {
          console.log(res.data)
          //alert("New Category Successfully Added")

          //Success
          toast.success("New Category Successfully Added");
          
          setDefault()
          navigate("/")
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err)
        }
        else {
          alert("error")
        }
      });
  }


  return (
    <div class="mydiv">
    <div class="outer">
      <div class="form">
      <h1 style={{color:"black"}} >Add New Category</h1>
        <input class="registration-inputs" type="text" value={catName} onChange={(e) => {
          setcatName(e.target.value);
        }} placeholder="Enter Product Name" />

        <input onChange={(e) => {
          if (e.target.files) {
            setCatPic(e.target.files[0]);
          }
        }} type="file" />


        {/* <input type="text" value={catId} onChange={(e) => {
          setCatId(e.target.value);
        }} placeholder="Enter category ID" /> */}


        <button onClick={validate} class="button-main">Add Category</button>
      </div>
    </div>
    </div>
  )
}
