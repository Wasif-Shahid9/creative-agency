import React, { useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import NestedList from "./Drawer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { getDocs } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../firebase";

const ShowSteps = () => {
  const [open, setOpen] = React.useState(true);
  const [viewServices, setViewServices] = useState([]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [img, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const servicesCollection = collection(db, "services");
    const getServices = async () => {
      const querySnapshot = await getDocs(servicesCollection);
      const servicesData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setViewServices(servicesData);
    };
    getServices();
  }, []);

  const handleAddSteps = async (e) => {
    if (!selectedService) {
      alert("Please select a service.");
      return;
    }

    e.preventDefault();
    const storageRef = ref(storage, `steps/${img.name}`);
    await uploadBytes(storageRef, img);
    const downloadURL = await getDownloadURL(storageRef);
    console.log("Image", downloadURL);
    setImageUrl(downloadURL);
    setImage(downloadURL);
    const selectedServiceDocRef = doc(
      collection(db, "services"),
      selectedService
    );
    const stepsCollectionRef = collection(selectedServiceDocRef, "steps");

    await addDoc(stepsCollectionRef, {
      title: title,
      detail: detail,
      img: downloadURL,
    });
    setTitle("");
    setDetail("");
    setImage(null);

    alert("Data sent successfully!");
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <NestedList />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={9} sx={{ marginLeft: "200px" }}>
          <Grid container>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <FormControl sx={{ width: "200px", marginLeft: "40px" }}>
                <InputLabel>Select Service </InputLabel>
                <Select
                  label="Select Service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  {viewServices.map((data) => (
                    <MenuItem key={data.id} value={data.id}>
                      {data.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                sx={{ width: "100%" }}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={5} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="Detail"
                variant="outlined"
                sx={{ width: "100%", margin: "10px 40px" }}
                onChange={(e) => {
                  setDetail(e.target.value);
                }}
              />
            </Grid>
            <Grid item lg={5} md={6} sm={12} xs={12}>
              <TextField
                type="file"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%", margin: "10px 50px" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImage(file);
                  setImageUrl("");
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ marginLeft: "30px" }}>
            <button className="admin_btn" onClick={handleAddSteps}>
              Add Data
            </button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ShowSteps;
