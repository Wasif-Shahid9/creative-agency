import React, { useState } from "react";
import { getDoc, doc, collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Newsletter = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address.")
      .required("Please enter your email."),
  });
  // const [newsletters, setNewsLetters] = useState("");
  // const areAllFieldsFilled = () => {
  //   return newsletters !== "";
  // };

  // const isSubmitDisabled = !areAllFieldsFilled();

  const handleNewsSubmit = async (values, { setSubmitting }) => {
    toast.success("Message Sent Successfully.");
    try {
      const newsCollection = collection(db, "newsletter");
      await addDoc(newsCollection, {
        email: values.email,
      });
    } catch (error) {
      toast.error("Please Fill The Field", {
        duration: 2000,
      });
    }
  };
  // const newsCollection = collection(db, "newsletter");
  // const handleNewsSubmit = async (e) => {
  //   e.preventDefault();
  //   if (areAllFieldsFilled()) {
  //     toast.success("Email Sent");
  //     await addDoc(newsCollection, {
  //       newsletters: newsletters,
  //     });
  //   } else {
  //     toast.error("Plz Fill The Field", {
  //       duration: 2000,
  //     });
  //   }
  // };

  // const inputClass = isSubmitDisabled ? "disabled" : "pointer";
  return (
    <section className="subscribe-newsletter sec-mar-top">
      <div className="container">
        <div className="news-letter-content">
          <div className="row align-items-center">
            <div
              className="col-lg-6 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="subscribe-cnt">
                <span>Get In Touch</span>
                <h3>Subscribe Our</h3>
                <strong>Newsletter</strong>
              </div>
            </div>
            <div
              className="col-lg-6 wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="subscribe-form">
                <Formik
                  initialValues={{
                    email: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleNewsSubmit}
                >
                  <Form>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Type Your Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="newsError-message"
                    />

                    {/* <button type="submit">Submit</button> */}
                    <input type="submit" value="Submit" />
                  </Form>
                </Formik>

                {/* <form>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type Your Email"
                    onChange={(e) => setNewsLetters(e.target.value)}
                  />

                  <input
                    type="submit"
                    value="Submit"
                    onClick={handleNewsSubmit}
                    className={inputClass}
                    style={{
                      cursor: isSubmitDisabled ? "not-allowed" : "pointer",
                    }}
                  />
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Newsletter;
