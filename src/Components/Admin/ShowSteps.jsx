import React from "react";
import { Grid } from "@mui/material";
import NestedList from "./Drawer";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useEffect } from "react";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import { getDocs } from "firebase/firestore";

const ShowSteps = () => {
  const serviceCollection = collection(db, "services");
  useEffect(() => {
    const getData = getDocs(serviceCollection);
  }, []);
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <NestedList />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={8} sx={{ marginLeft: "200px" }}>
          <List sx={{ width: "200px", background: "#e7ebf0" }}>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
              <ListItemText primary="DropDown" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default ShowSteps;
