import React, { useEffect } from "react";
import "./UpdateService.css";
import { useState } from "react";
import { db } from "../../firebase";
import { collection, getDoc, addDoc, doc, updateDoc } from "firebase/firestore";
import "./AddService.css";
import NestedList from "./Drawer";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UpdateServices = () => {
  const { state } = useLocation();
  const [updatetitle, setTitle] = useState("");
  const [updatedetail, setDetail] = useState("");
  const [updateicon, setIcon] = useState("");
  const [updateimage, setImage] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    console.log("Update Data", state);
    setTitle(state.title || "");
    setDetail(state.detail || "");
    setIcon(state.icon || "");
    setImage(state.image || "");
    setIconUrl(state.iconUrl || "");
    setImageUrl(state.imageUrl || "");
  }, []);

  const dataCollection = collection(db, "services");

  const handleUpdateData = async (e, id) => {
    e.preventDefault();
    console.log(id);

    const docUpdate = doc(dataCollection, id);
    let iconUrlValue = iconUrl;
    if (updateicon) {
      const storageRef = ref(getStorage(), `icons/${updateicon.name}`);
      await uploadBytes(storageRef, updateicon);
      iconUrlValue = await getDownloadURL(storageRef);
      console.log(iconUrlValue);
    }
    let imageUrlValue = imageUrl;
    if (updateimage) {
      const storageRef = ref(getStorage(), `images/${updateimage.name}`);
      await uploadBytes(storageRef, updateimage);
      imageUrlValue = await getDownloadURL(storageRef);
      console.log(imageUrlValue);
    }

    updateDoc(docUpdate, {
      title: updatetitle,
      detail: updatedetail,
      icon: iconUrlValue,
      image: imageUrlValue,
    })
      .then(() => {
        alert("Data update");
      })
      .catch((error) => {
        alert("Error Message", error);
      });
  };

  const handleIconChange = (e) => {
    setIconUrl(URL.createObjectURL(e.target.files[0]));
    setIcon(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[1]));
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <NestedList />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9} container>
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
                <label>Detail</label>
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
                <label className="mt-3">Icon</label>
                <br />
                <input type="file" onChange={handleIconChange} />

                <img
                  src={updateicon}
                  // href={iconUrl}
                  alt="Icon Preview"
                  className="addServices__icon-preview"
                />
              </div>
              <div className="col-lg-6 col-sm-6">
                <label className="mt-3">Image</label>
                <br />
                <input type="file" onChange={handleImageChange} />

                <img
                  src={imageUrl}
                  alt="Image Preview"
                  className="addServices__image-preview"
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

export default UpdateServices;
