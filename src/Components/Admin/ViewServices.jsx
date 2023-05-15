import React from "react";
import "./ViewServices.css";
import Table from "@mui/material/Table";
import "./ViewServices.css";
import NestedList from "./Drawer";
import Grid from "@mui/material/Grid";
import { db } from "../../firebase";
import {
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const ViewServices = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [viewServices, setViewServices] = useState(null);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDetail, setUpdateDetail] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawerWidth = 240;
  const handleAdd = () => {};

  const handleDelete = async (id) => {
    const docRef = doc(db, "services", id);
    try {
      await deleteDoc(docRef);
      setViewServices((prevViewServices) =>
        prevViewServices.filter((data) => data.id !== id)
      );
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const updateData = async (id) => {
    console.log(id);
    const docRef = doc(db, "services", id);
    try {
      await updateDoc(docRef, {
        title: updateTitle,
        detail: updateDetail,
      });
      alert("Data Update Successfully");
    } catch (error) {
      console.log("Update Doc", error);
    }
  };

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;
  const container = "";

  useEffect(() => {
    const userCollection = collection(db, "services");
    console.log(userCollection);
    const getDataTable = async () => {
      const docData = await getDocs(userCollection);
      // console.log(docData);
      // setViewServices(
      //   docData.docs.map((doc) => {
      //     ...doc.data(), id: doc.id
      //     const temp = doc.data();
      //     temp.id = doc.id;
      //     return temp;

      //   })
      // );
      setViewServices(
        docData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getDataTable();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <NestedList />
        </Grid>
        {viewServices ? (
          <Grid item xs={12} sm={8} md={8} lg={9} container>
            <Table striped bordered hover className="table" responsive="md">
              <thead className="table__head">
                <tr>
                  <th>Title</th>
                  <th>Detail</th>
                  <th>Icon</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody className="table_body">
                {viewServices.map((data, i) => (
                  <tr key={data.id}>
                    <td>{data.title}</td>
                    <td>{data.detail}</td>
                    <td>
                      <img
                        className="table__icon"
                        src={data.icon}
                        alt="Error"
                      />
                    </td>
                    <td>
                      <button
                        className="viewDelete__btn"
                        onClick={() => {
                          console.log(data.id);
                          handleDelete(data.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    {/* <Link
                      to={{
                        pathname: "/updateservice",
                        state: { serviceData: "hello" },
                      }}
                    >
                      <td>
                        <button
                          className="viewDelete__btn"
                          onClick={() => {
                            updateData(data.id);
                          }}
                        >
                          Update
                        </button>
                      </td>
                    </Link> */}
                    <td>
                      <button className="viewUpdate__btn">
                        <a
                          onClick={() => {
                            navigate("/updateservice", { state: data });
                            // updateData(data.id);
                          }}
                        >
                          Update
                        </a>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Grid>
        ) : (
          <p>Loading</p>
        )}
      </Grid>
    </>
  );
};

export default ViewServices;
