import React, { useState, useEffect } from "react";
import NestedList from "./Drawer";

import { Grid } from "@mui/material";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { async } from "@firebase/util";
import "./EditAbout.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const HeaderSlider = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState(null);
  const dataCollection = collection(db, "home");
  const data = doc(dataCollection, "slider");

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(dataCollection, "slider");
      const docData = await getDoc(docRef);
      const data = docData.data();
      console.log(data);
      setTitle(data.title);
      setDetail(data.detail);
    };
    getData();
  }, []);

  const handleSliderUpdate = async (e) => {
    e.preventDefault();
    if (image) {
      const storageRef = ref(storage, `home/slider/${image.name}`);
      const snapshot = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      console.log(downloadUrl);
      const docRef = doc(dataCollection, "slider");
      await updateDoc(docRef, {
        title,
        detail,
        image: downloadUrl,
      });
      alert("Data updated successfully!");
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <NestedList />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9} container>
          <form className="editAbout__form ">
            <div className="row">
              <h4>GET TO KNOW</h4>
              <div className="col-lg-5 col-md-6 col-sm-12">
                <label>Title</label>
                <input
                  className="editAbout__input"
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Update Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12">
                <label>Detail</label>

                <CKEditor
                  className="editAbout__input"
                  type="text"
                  name="detail"
                  value={detail}
                  data={detail}
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDetail(data);
                  }}
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="mt-3">Image</label>
                <br />
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-10">
                <button
                  type="submit"
                  onClick={handleSliderUpdate}
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

export default HeaderSlider;
