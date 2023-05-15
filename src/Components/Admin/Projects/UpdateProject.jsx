import React, { useEffect, useState } from "react";
import "./UpdateProject.css";
import NestedList from "../Drawer";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { storage } from "../../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UpdateProject = () => {
  const { state } = useLocation();
  const [updatetitle, setTitle] = useState("");
  const [updatedetail, setDetail] = useState("");
  const [link, setLink] = useState("");
  const [updateimage, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [one, setOne] = useState(true);

  useEffect(() => {
    console.log("Update Data", state);
    setTitle(state.title || "");
    setDetail(state.detail || "");
    setImage(state.image || "");
  }, []);

  const dataCollection = collection(db, "projects");

  const handleUpdateData = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const docUpdate = doc(dataCollection, id);

    let imageUrlValue = imageUrl;
    if (updateimage) {
      const storageRef = ref(getStorage(), `projects/${updateimage.name}`);
      await uploadBytes(storageRef, updateimage);
      imageUrlValue = await getDownloadURL(storageRef);
      console.log(imageUrlValue);
    }
    updateDoc(docUpdate, {
      title: updatetitle,
      detail: updatedetail,
      image: imageUrlValue,
    })
      .then(() => {
        alert("Data update");
      })
      .catch((error) => {
        alert("Error Message", error);
      });
  };
  const handleImageUpdate = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setOne(false);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={4} lg={3}>
          <NestedList />
        </Grid>
        <Grid item xs={12} md={8} lg={9} container>
          <form className="addServices__form">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <label>Title</label>
                <input
                  className="addServices__input"
                  type="text"
                  name="title"
                  placeholder="Update Title"
                  value={updatetitle}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="col-lg-6 col-sm-6">
                <label>Type</label>
                <input
                  className="addServices__input"
                  type="text"
                  name="detail"
                  placeholder="Updated Details"
                  value={updatedetail}
                  onChange={(e) => {
                    setDetail(e.target.value);
                  }}
                />
              </div>
              <div className="col-lg-6 col-sm-6">
                <label>Link</label>
                <input
                  className="addServices__input"
                  type="text"
                  name="detail"
                  placeholder="Updated Link"
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />
              </div>

              <div className="col-lg-6 col-sm-6">
                <label className="mt-3">Image</label>
                <br />
                <input type="file" onChange={handleImageUpdate} />
                <img
                  src={one ? updateimage : imageUrl}
                  className="addServices__image-preview"
                  alt="Error"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <button
                  type="submit"
                  onClick={(e) => handleUpdateData(e, state.id)}
                  className="admin_btn"
                >
                  Update Data
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
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

export default UpdateProject;
