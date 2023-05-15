import React, { useState } from "react";
import NestedList from "./Drawer";
import "./EditAbout.css";
import { Grid } from "@mui/material";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { async } from "@firebase/util";
import "./EditAbout.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

///////// GET TO KNOW CODE START
const EditAbout = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState(null);
  const dataCollection = collection(db, "about_us");
  const data = doc(dataCollection, "get_to_know");

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(dataCollection, "get_to_know");
      const docData = await getDoc(docRef);
      const data = docData.data();
      console.log(data);
      setTitle(data.title);
      setDetail(data.detail);
    };
    getData();
  }, []);

  const handleUpdateAbout = async (e) => {
    e.preventDefault();
    if (image) {
      const storageRef = ref(storage, `about_us/get_to_know/${image.name}`);
      const snapshot = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      console.log(downloadUrl);
      const docRef = doc(dataCollection, "get_to_know");
      await updateDoc(docRef, {
        title,
        detail,
        image: downloadUrl,
      });
      alert("Data updated successfully!");
    }
  };
  ///////// GET TO KNOW CODE END

  const [chooseTitle, setChooseTitle] = useState("");
  const [chooseDetail, setChooseDetail] = useState("");

  useEffect(() => {
    const getData = async () => {
      const dataReference = doc(dataCollection, "whay_chose_us");
      const docData = await getDoc(dataReference);
      const showData = docData.data();
      console.log("Main Data", showData);
      setChooseTitle(showData.title);
      setChooseDetail(showData.detail);
    };
    getData();
  }, []);
  const handleChooseUpdate = async (e) => {
    e.preventDefault();
    const docRef = doc(dataCollection, "whay_chose_us");
    await updateDoc(docRef, {
      title: chooseTitle,
      detail: chooseDetail,
    });
    alert("Data updated successfully!");
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
              <div className="col-lg-5 col-sm-6">
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
              <div className="col-lg-5 col-sm-6">
                <label>Detail</label>
                {/* <input
                  className="editAbout__input"
                  type="text"
                  name="detail"
                  value={detail}
                  placeholder="Updated Details"
                  onChange={(e) => {
                    setDetail(e.target.value);
                  }}
                /> */}
                <CKEditor
                  className="editAbout__input"
                  type="text"
                  name="detail"
                  value={detail}
                  data={detail}
                  editor={ClassicEditor}
                  // config={editorConfig}
                  onReady={(editor) => {
                    console.log(
                      "CKEditor5 React Component is ready to use!",
                      editor
                    );
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDetail(data);
                  }}
                />
              </div>

              <div className="col-lg-6 col-sm-6">
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
                  onClick={handleUpdateAbout}
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

        <Grid item xs={12} sm={4} md={4} lg={3}>
          <h1></h1>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9} container>
          <form className="editAbout__form ">
            <div className="row">
              <h4 className="editAbout__head">Why Choose Us</h4>
              <div className="col-lg-5  col-sm-6">
                <label>Title</label>
                <input
                  className="editAbout__input"
                  type="text"
                  name="title"
                  value={chooseTitle}
                  placeholder="Update Title"
                  onChange={(e) => {
                    setChooseTitle(e.target.value);
                  }}
                />
              </div>
              <div className="col-lg-5 col-sm-6">
                <label>Detail</label>
                {/* <input
                  className="editAbout__input"
                  type="text"
                  name="detail"
                  value={chooseDetail}
                  placeholder="Updated Details"
                  onChange={(e) => {
                    setChooseDetail(e.target.value);
                  }}
                /> */}
                <CKEditor
                  className="editAbout__input"
                  type="text"
                  name="detail"
                  value={chooseDetail}
                  data={detail}
                  editor={ClassicEditor}
                  // config={editorConfig}
                  onReady={(editor) => {
                    console.log(
                      "CKEditor5 React Component is ready to use!",
                      editor
                    );
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setChooseDetail(data);
                  }}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-10">
                <button
                  type="submit"
                  onClick={handleChooseUpdate}
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

export default EditAbout;
