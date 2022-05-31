import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN ,
  projectId: process.env.REACT_APP_PROJECTID ,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_IdMESSAGINGSENDERID ,
  appId: process.env.REACT_APP_APPID ,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const productsCollection = collection(db, 'items')
const comprasColeccion = collection(db, 'compras')

// obtener datos
const getProductsData = async () => {
  const querySnapshot = await getDocs(productsCollection)
  let dbProductos = []
  querySnapshot.forEach(item => {
    dbProductos.push(item.data())
  })
  return dbProductos

}
// guardar compra
export const grabarCompra = async (orders) => {
  const respuesta = await addDoc(comprasColeccion, orders)
  console.log("grabarCompra");
  return respuesta
}

export default getProductsData