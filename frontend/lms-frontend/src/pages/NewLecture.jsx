import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import axios from 'axios';

const CreatePostForm = () => {
  // const [courseId, setCourseId] = useState("")
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [inputs, setInputs] = useState({});
  const [imgPercentage, setImgPercentage] = useState(0);
  const [vidPercentage, setVidPercentage] = useState(0);

  let path = useLocation().pathname.split("/")[2]
  const navigate= useNavigate()
  const courseId = path;
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  const [tok, setTok] = useState("");
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setTok(userInfo.data.token);
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const upload = (file, urlType) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {

        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType==="thumbnail"?setImgPercentage(Math.round(progress)):setVidPercentage(Math.round(progress))
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
  
  useEffect(() => {
    image && upload(image, "thumbnail")
  }, [image])

  useEffect(()=>{
    video && upload(video, "videoUrl")
  },[video])

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    const config = {
      headers: {
        Authorization: `Bearer ${tok}`
      }
    }

    const res = await axios.post("http://localhost:8000/api/lecture/",{...inputs, courseId},config)
    console.log(res)
    navigate(`/course/${courseId}`)

    console.log('Inputs:', inputs);
    console.log('Image:', image);
    console.log('Video:', video);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-600 py-12">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          Post New Lecture
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
            {imgPercentage > 0 ? (
              "Uploading: " + imgPercentage + "% done"
            ) :
              (<input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-500 bg-white text-gray-700"
                required
              />)
            }
            <p className="mt-1 text-sm text-gray-500">
              Accepted formats: jpg, png, gif
            </p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="video"
              className="block text-gray-700 font-bold mb-2"
            >
              Upload Lecture Video
            </label>
            {vidPercentage>0?
            ("Uploading: "+vidPercentage+"% done")
            :
              (
                <input
              type="file"
              id="video"
              accept="video/*"
              onChange={handleVideoChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-500 bg-white text-gray-700"
            />
              )
            }
            
            <p className="mt-1 text-sm text-gray-500">
              Accepted formats: mp4, mov, avi
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-violet-600 text-white font-bold py-2 px-6 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;