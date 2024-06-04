import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import axios from 'axios';


const categories = [
  'Art', 'Medicine', 'Engineering', 'School', 'Programming'
];

const CreateCourse = () => {
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [inputs, setInputs] = useState({});
  const [imgPercentage, setImgPercentage] = useState(0);
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const upload = (file,urlType) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgPercentage(Math.round(progress))
        console.log('Upload is ' + (Math.round(progress)) + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    )
  }
  const [tok, setTok] = useState("");
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
//    console.log(userInfo.data.token)
    setTok(userInfo.data.token);
  }, []);


  useEffect(() => { image&&upload(image, "thumbnail") }, [image])

  const handleSubmit = async(e) => {
        // Handle form submission logic here
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${tok}`
      }
    }
    console.log('inputs:', inputs);
    console.log('Category:', category);
    const res = await axios.post("http://localhost:8000/api/course/",{...inputs, category},config)
    console.log(res)
    navigate("/courses")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-500 py-12">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          Create New Course
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-500 h-32 resize-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Upload Thumbnail
            </label>
            {imgPercentage>0?(
              "Uploading: "+imgPercentage+"% done"
            ):
            (<input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-500 bg-white text-gray-700"
              required
            />)
          }
          </div>
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-500 bg-white"
              required
            >
              <option value="" disabled>Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-violet-600 text-white font-bold py-2 px-6 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;