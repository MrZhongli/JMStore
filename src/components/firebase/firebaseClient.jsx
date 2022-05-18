import React, { useEffect, useState } from 'react'
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBf52AIL_Cf9OYFduTexrjiVtb7ncfI1DE",
  authDomain: "rosse-papeleria.firebaseapp.com",
  projectId: "rosse-papeleria",
  storageBucket: "rosse-papeleria.appspot.com",
  messagingSenderId: "988501034416",
  appId: "1:988501034416:web:f549125b7d8975caae0275",
  measurementId: "G-LM6NLK6XTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




const GetProducts = () => {

    const [item, setItem] = useState()
    useEffect(() => {
        const db = getFirestore() 

        const planners = doc(db,'items','2')
        getDoc( planners ).then( res => { 
            if(res.exists()){
                console.log(res)
                console.log(res.id)
                setItem(res.data())
            }
         })
    
    }, [])
    

  return (
    <div>
        <h1>prueba</h1>
        <p>{item.name} </p>
        <p>{item.description} </p>
        <p>{item.price} </p>
    </div>
  )
}

export default GetProducts