import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Service from "./Pages/Service/Service";
import Servicedetail from "./Pages/Service/Servicedetail";
import Project from "./Pages/Project/Project";
import { useState, useEffect } from "react";
import "./screens/Home.css";

import Contact from "./Pages/Contact/Contact";
import Team from "./Pages/Team/Team";
import Pricing from "./Pages/Team/Pricing";
import FAQS from "./Pages/Team/FAQS";
import Error from "./Pages/Team/Error";
import About from "./Pages/About/About";
import "animate.css";
import Admin from "./Components/Admin/Admin";
import UpdateServices from "./Components/Admin/UpdateService";
import ViewServices from "./Components/Admin/ViewServices";
import EditAbout from "./Components/Admin/EditAbout";
import AddProjects from "./Components/Admin/Projects/AddProjects";
import ViewProjects from "./Components/Admin/Projects/ViewProjects";
import UpdateProject from "./Components/Admin/Projects/UpdateProject";
import Partner from "./Components/Admin/Partners/Partner";
import ViewPartners from "./Components/Admin/Partners/ViewPartners";
import ShowSteps from "./Components/Admin/ShowSteps";
import HeaderSlider from "./Components/Admin/HeaderSlider";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div>
          <div className="preloader">
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (
        <Router>
          {/* <CardSlider /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/servicedetail" element={<Servicedetail />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faqs" element={<FAQS />} />
            <Route path="/error" element={<Error />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/updateservice" element={<UpdateServices />} />
            <Route path="/viewservices" element={<ViewServices />} />
            <Route path="/editabout" element={<EditAbout />}></Route>
            <Route path="/addprojects" element={<AddProjects />}></Route>
            <Route path="/viewprojects" element={<ViewProjects />}></Route>
            <Route path="/updateproject" element={<UpdateProject />}></Route>
            <Route path="/partner" element={<Partner />}></Route>
            <Route path="/viewpartner" element={<ViewPartners />}></Route>
            <Route path="/showsteps" element={<ShowSteps />}></Route>
            <Route path="/headerslider" element={<HeaderSlider />}></Route>
          </Routes>
        </Router>
      )}
    </>
  );
}
export default App;
