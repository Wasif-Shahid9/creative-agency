import React, { useState, useEffect } from "react";
import NestedList from "../Drawer";
import { Grid, Table } from "@mui/material";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const ViewPartners = () => {
  const [viewPartners, setViewPartners] = useState("");
  useEffect(() => {
    const dataCollection = collection(db, "partners");
    const getData = async () => {
      const docData = await getDocs(dataCollection);
      console.log("Data", docData);
      setViewPartners(
        docData.docs.map((data) => ({ ...data.data(), id: data.id }))
      );
    };
    getData();
  }, []);
  const handleDelete = async (id) => {
    console.log(id);
    const docRef = doc(db, "partners", id);
    try {
      await deleteDoc(docRef);
      setViewPartners((singledelete) => {
        singledelete.filter((data) => data.id !== id);
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <Grid container>
        <Grid item sm={6} md={4} lg={3}>
          <NestedList />
        </Grid>
        {viewPartners ? (
          <Grid item sm={6} md={8} lg={9} xxl={9} container>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="table"
              responsive="md"
            >
              <thead className="table__head">
                <tr>
                  <td>Logo</td>
                  <td>Delete</td>
                </tr>
              </thead>
              <tbody className="table_body">
                {viewPartners.map((data) => {
                  console.log(data);
                  return (
                    <>
                      <tr>
                        <td> {data.image} </td>
                        <td>
                          <button
                            onClick={() => handleDelete(data.id)}
                            className="viewDelete__btn"
                          >
                            Delete
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
          <p>Loading..................</p>
        )}
      </Grid>
    </>
  );
};

export default ViewPartners;
