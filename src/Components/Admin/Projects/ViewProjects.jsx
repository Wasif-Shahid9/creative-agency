import React, { useState } from "react";
import NestedList from "../Drawer";
import { Grid, Table } from "@mui/material";
import "./ViewProject.css";
import { db } from "../../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewProjects = () => {
  const navigate = useNavigate();
  const [viewProject, setViewProject] = useState("");

  useEffect(() => {
    const userCollection = collection(db, "projects");
    console.log(userCollection);
    const getDataTable = async () => {
      const docData = await getDocs(userCollection);
      setViewProject(
        docData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getDataTable();
  }, []);

  // const handleDelete = async (id) => {
  //   console.log(id);
  //   const docRef = doc(db, "projects", id);
  //   try {
  //     await deleteDoc(docRef);
  //     setViewProject((projects) => {
  //       projects.filter((project) => project.id !== id);
  //     });
  //   } catch (error) {
  //     console.error("Error removing document: ", error);
  //   }
  // };
  const handleDelete = async (id) => {
    const docRef = doc(db, "projects", id);
    try {
      await deleteDoc(docRef);
      setViewProject((prevViewServices) =>
        prevViewServices.filter((data) => data.id !== id)
      );
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <NestedList />
        </Grid>
        {viewProject ? (
          <Grid item xs={12} sm={8} md={8} lg={9} container>
            <Table striped= "true" bordered hover  className="table" responsive="md">
              <thead className="table__head">
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Link</th>
                  <th>Image</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody className="table_body">
                {viewProject.map((data) => {
                  console.log("data......", data);
                  return (
                    <>
                      <tr key={data.id}>
                        <td>{data.title} </td>
                        <td>{data.detail} </td>
                        <td>
                          <a href="">{data.url} </a>
                        </td>

                        <td>
                          <img
                            src={data.image}
                            alt="Error"
                            className="projecttable__icon"
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => handleDelete(data.id)}
                            className="viewDelete__btn"
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <button
                            className="viewUpdate__btn"
                            onClick={() =>
                              navigate("/updateproject", { state: data })
                            }
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Grid>
        ) : (
          <p>Loading..............</p>
        )}
      </Grid>
    </>
  );
};

export default ViewProjects;
