import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getHomeSection = async (section) => {
  const homeRef = doc(db, "home", section);
  const docData = await getDoc(homeRef);
  return docData.data();
};

export const getContactUs = async (section) => {
  const contactUs = doc(db, "contact_us", section);
  const docData = await getDoc(contactUs);
  return docData.data();
};

export const getAboutUs = async (section) => {
  const aboutUs = doc(db, "about_us", section);
  const docData = await getDoc(aboutUs);
  return docData.data();
};
export const getClientComments = async (section) => {
  const clientComment = doc(db, "client_comments", section);
  const docData = await getDoc(clientComment);
  return docData.data();
};



