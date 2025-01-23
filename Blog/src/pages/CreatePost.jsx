import React, { useEffect, useState } from "react";
import {addDoc, collection} from "firebase/firestore"
import { auth, db} from "../firebase-config.js"
import { useNavigate} from "react-router-dom"
 
function CreatePost({isAuth}){
    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")

    const postCollectionRef = collection(db, "posts")
    const navigate = useNavigate()

    const createPost = async ()=>{
        await addDoc(postCollectionRef, {
            title,
            postText,
            author : {name : auth.currentUser.displayName, id : auth.currentUser.uid},
        });
        navigate("/");
    }

    useEffect(()=>{
        if(!isAuth){
            navigate("/login");
        }
    },[])
    
    return(
        <div id="postPage" className=" place-items-center text-white h-full py-20">
            <div id="pageContainer" className=" bg-amber-900 w-5/12 pt-5 px-5 rounded-md">
                <div className=" w-full">
                    <h1 className=" text-center font-bold text-xl">Create A Post</h1>
                    <div className=" flex flex-col w-full pt-5">
                        <label className=" font-semibold">Title: </label>
                        <input type="text" placeholder="Title..." id="" className=" text-black rounded px-2 h-12 focus:ring-2 focus:outline-none focus:ring-amber-600"
                        onChange={(event)=>{setTitle(event.target.value)}}/>
                    </div>
                    <div className=" flex flex-col w-full pt-5">
                        <label className=" font-semibold">Post: </label>
                        <textarea id="" placeholder="Post..." rows={"6"} className="text-black rounded px-2 block resize-y w-full 
                        scrollbar-none overscroll-y-auto focus:ring-2 focus:outline-none focus:ring-amber-600" 
                        onChange={(event)=>{setPostText(event.target.value)}}></textarea>
                    </div>
                    <button className="bg-white text-amber-900 text-center w-full my-5 font-bold rounded py-2 hover:ring-2 hover:ring-amber-600 hover:text-amber-600"
                    onClick={createPost}>Submit Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;