import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Admin.css";
import { db } from "../../firebase";
import { collection, getDoc, doc, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import NestedList from "./Drawer";
// import Accordion from "@mui/material/Accordion";
import { BiHomeAlt2 } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { MdMedicalServices } from "react-icons/md";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../firebase";

const drawerWidth = 240;

function Admin(props) {
  ////////// Validation start

  ////////// Validation END
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [iconFile, setIconFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [disableBtb, setDisableButton] = useState(true);
  const dataCollection = collection(db, "services");

  // const handleAddService = async (e) => {
  //   alert("Message Sent Successfull");
  //   e.preventDefault();
  //   if (imageUpload && iconUpload) {
  //     const imgRef = ref(storage, imageUpload.name);
  //     console.log("Image Ref", imgRef);
  //     await uploadBytes(imgRef, imageUpload);
  //     const downloadURL = await getDownloadURL(imgRef);
  //     setImage(downloadURL);
  //     setIcon(downloadURL);

  //     alert("Img Upload");

  //     await addDoc(dataCollection, {
  //       title: title,
  //       detail: detail,
  //       icons: icon,
  //       img: image,
  //     });
  //     alert("Message Sent Successfully");
  //   } else {
  //     alert("Please select an image and icon to upload.");
  //   }
  // };

  // Form

  const handleAddService = async (e) => {
    e.preventDefault();
    if (iconFile && imageFile) {
      const iconRef = ref(storage, iconFile.name);
      await uploadBytesResumable(iconRef, iconFile);
      const iconDownloadUrl = await getDownloadURL(iconRef);
      console.log(iconDownloadUrl);
      setIconUrl(iconDownloadUrl);

      const imageRef = ref(storage, imageFile.name);
      await uploadBytesResumable(imageRef, imageFile);
      const imageDownloadUrl = await getDownloadURL(imageRef);
      setImageUrl(imageDownloadUrl);

      await addDoc(dataCollection, {
        title: title,
        detail: detail,
        icon: iconDownloadUrl,
        image: imageDownloadUrl,
      });
      setTitle("");
      setDetail("");
      setIconUrl("");
      setImageUrl("");
      setIconFile(null);
      setImageFile(null);

      alert("Data send successfully!");
    } else {
      alert("Please select an image and icon to upload.");
    }
  };

  ////////////////////////// Firebase End
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <NestedList />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            Admin Dashboard
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          ></Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Typography paragraph></Typography>
          <Typography paragraph></Typography>
        </Box>
      </Box>

      <form className="admin__form">
        <div className="row">
          <div className="col-lg-5 col-sm-6">
            <label>Title</label>

            <input
              className="admin__input"
              type="text"
              name="name"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="col-lg-5 col-sm-6">
            <label>Detail</label>
            <input
              className="admin__input"
              type="email"
              name="email"
              placeholder="Enter Detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>
          <div className="col-lg-6 col-sm-6 mt-3">
            <label>Icon</label> <br />
            <input
              type="file"
              onChange={(e) => setIconFile(e.target.files[0])}
            />
          </div>
          <div className="col-lg-6 mt-3 col-sm-6">
            <label>Image</label> <br />
            <input
              type="file"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </div>
        </div>
        <button className="admin_btn" onClick={handleAddService}>
          Add Data
        </button>
      </form>
    </>
  );
}

export default Admin;
