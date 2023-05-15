import React, { useState } from "react";
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

import { Link, useNavigate } from "react-router-dom";
// import Accordion from "@mui/material/Accordion";

import { MdHomeRepairService } from "react-icons/md";
import { BsCassette } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { SiHandshake } from "react-icons/si";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { AiOutlineHome } from "react-icons/ai";

const drawerWidth = 240;

const NestedList = (props) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleServicesClick = () => {
    setServicesOpen(!servicesOpen);
  };
  const handleAboutClick = () => {
    setAboutOpen(!aboutOpen);
  };

  const handleProjectClick = () => {
    setProjectsOpen(!projectsOpen);
  };
  const handlePartnerClick = () => {
    setPartnerOpen(!partnerOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 250, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            DashBoard
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <AiOutlineHome />
          </ListItemIcon>
          <Link to="/">
            <ListItemText primary="Home" />
          </Link>
        </ListItemButton>
        <ListItemButton onClick={handleServicesClick}>
          <ListItemIcon>
            <MdHomeRepairService />
          </ListItemIcon>
          <ListItemText primary="Services" />
          {servicesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon></ListItemIcon>
              <Link to="/viewservices">
                <ListItemText primary="View Services" />
              </Link>
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon></ListItemIcon>
              <Link to="/admin">
                <ListItemText primary="Add Service" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleAboutClick}>
          <ListItemIcon>
            <BsCassette />
          </ListItemIcon>
          <ListItemText primary="About" />
          {aboutOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={aboutOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon></ListItemIcon>
              <Link to="/editabout">
                <ListItemText primary="Edit About" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleProjectClick}>
          <ListItemIcon>
            <GrProjects />
          </ListItemIcon>
          <ListItemText primary="Projects" />
          {projectsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={projectsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon></ListItemIcon>
              <Link to="/viewprojects">
                <ListItemText primary="View Projects" />
              </Link>
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon></ListItemIcon>
              <Link to="/addprojects">
                <ListItemText primary="Add Projects" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handlePartnerClick}>
          <ListItemIcon>
            <SiHandshake />
          </ListItemIcon>
          <ListItemText primary="Partners" />
          {partnerOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={partnerOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon></ListItemIcon>
              <Link to="/partner">
                <ListItemText primary="Add Partners" />
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon></ListItemIcon>
              <Link to="/viewpartner">
                <ListItemText primary="View  Partners" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
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
          >
            {drawer}
          </Drawer>
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
    </>
  );
};
export default NestedList;
