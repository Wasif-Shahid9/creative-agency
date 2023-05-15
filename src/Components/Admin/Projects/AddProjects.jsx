import React, { useState } from "react";
import NestedList from "../Drawer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./AddProject.css";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../../firebase";

const AddProjects = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const projectCollection = collection(db, "projects");
  console.log("Project", projectCollection);

  const handleProjectAdd = async (e) => {
    e.preventDefault();
    try {
      if (image) {
        const storageRef = ref(getStorage(), `projects/${image.name}`);
        await uploadBytes(storageRef, image);
        const imageDownloadedUrl = await getDownloadURL(storageRef);
        console.log(imageDownloadedUrl);
        setImage("image", imageDownloadedUrl);

        await addDoc(projectCollection, {
          title: title,
          detail: type,
          image: imageDownloadedUrl,
          url: url,
        });
        alert("data Sent");
      }
    } catch (error) {
      alert("Data Fail", error);
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <NestedList />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9} container>
          <form className="addProject__form">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <label>Title</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Tilte"
                  className="addproject__input"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-sm-6">
                <label>Type</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Type"
                  className="addproject__input"
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-sm-6">
                <label>URL</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Url"
                  onChange={(e) => setUrl(e.target.value)}
                  className="addproject__input"
                />
              </div>
              <div className="col-lg-6 col-sm-6">
                <label>image</label>
                <br />
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="col-lg-8 col-sm-6">
                <button
                  type="submit"
                  onClick={handleProjectAdd}
                  className="admin_btn"
                >
                  Update Data
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default AddProjects;
