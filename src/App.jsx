import logo from './logo.svg';
import './App.css';
import React, { useRef, useState} from 'react';
import {storage } from './fire'
import { ref,uploadBytes } from "firebase/storage";
import '../src/stylesheet/wdding.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUpload } from '@fortawesome/free-solid-svg-icons'



const App = () => {
  

  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoader] = useState('');

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const urls = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = await uploadImage(file);
      urls.push(url);
    }

    setImageUrls(urls);
    alert('image uploaded')
  };

  const uploadImage = async (file) => {
    const imageRef =  ref(storage, 'wedding-pictures/' + file.name);
   
    uploadBytes(imageRef, file).then((snapshot) => {
      console.log(snapshot);
    });
    return 'success';
  };
  return (
    <div className='wedding'>

<div className="gob gvr-font">
  <p>Groom</p>
  <p>&</p>
  <p>bride</p>
</div>

<div className="frame">
  <img className='img' src='https://img.freepik.com/free-photo/side-view-smiley-couple_23-2148850946.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714176000&semt=ais' alt=""  />
</div>


<div className="cta gvr-font">
<h2>Share Your Memories</h2>
    <p>Did you capture some beautiful moments at the wedding? Share them with the couple!</p>
</div>


      <div className="upload-div">
      <label htmlFor="file-upload" class="custom-file-upload">
     Upload Image <FontAwesomeIcon icon={faUpload}/>
    
</label>
         <input type="file" id='file-upload' onChange={handleImageUpload} accept="image/*" multiple />
    
      </div>
      
     
         </div> 
  );
};
 export default App;