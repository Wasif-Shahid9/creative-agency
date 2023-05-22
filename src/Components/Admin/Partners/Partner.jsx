import React, { useState } from "react";
import NestedList from "../Drawer";
import "./Partner.css";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

const Partner = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const dataCollection = collection(db, "partners");

  // };

  const handleAddData = async (e) => {
    e.preventDefault();
    try {
      if (image) {
        const storageRef = ref(getStorage(), `/${image.name}`);
        await uploadBytes(storageRef, image);
        const imageDownloadedUrl = await getDownloadURL(storageRef);
        console.log(imageDownloadedUrl);
        setImage("image", imageDownloadedUrl);

        await addDoc(dataCollection, {
          image: imageDownloadedUrl,
        });
        alert("data Sent");
      }
    } catch (error) {
      alert("Data Fail", error);
    }
    navigate("/viewpartner");
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <NestedList />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
            className="form"
          >
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </Box>

          <button type="submit" className="admin_btn" onClick={handleAddData}>
            Update Data
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default Partner;
