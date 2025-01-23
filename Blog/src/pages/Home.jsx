import React, { useState, useEffect } from "react";
import {collection, doc, getDocs} from "firebase/firestore"
import {db} from "../firebase-config.js"

function Home(){
    const [postList, setPostList] = useState([]);
    const postCollectionRef = collection(db, "posts");

    useEffect(()=>{
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc)=>({...doc.data()})));
        }
        getPosts();
    },[])

    return(
        <>Home</>
    )
}

export default Home;