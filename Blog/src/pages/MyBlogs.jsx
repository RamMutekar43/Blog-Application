import React, { useState, useEffect } from "react";
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore"
import {auth, db} from "../firebase-config.js"
import { useNavigate } from "react-router-dom";

function MyBlogs({isAuth}){
    const [postList, setPostList] = useState([]);
    const postCollectionRef = collection(db, "posts");
    const navigate = useNavigate();

    // function for delete post 
    const deletePost = async (id) => {
        try {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        setPostList(postList.filter((post)=>post.id != id));
        } catch (error) {
        console.log("ERROR DELETING POST: ", error);
        }
    }

    // function to fetch blogs of the current user 
    useEffect(()=>{
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            try {
                setPostList(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
            } catch (error) {
                console.log("ERROR FETCHING FIREBASE DATA: ", error)
            }
        }
        getPosts();

        if(!isAuth){
            navigate("/login");
        }
    },[deletePost])

    return(
            <>
            <div id="myBlogs" className=" place-items-center py-10">
                {postList.map((post)=>{
                    return(
                        (post.author.id === auth.currentUser.uid && 
                        <div id="post" className=" w-1/2 rounded-lg my-5 p-5 border-amber-900 border-2 bg-yellow-200 shadow-amber-900 shadow-md">
                            <div id="postHeader" className=" flex justify-between">
                                <div id="title" className=" text-3xl font-semibold">
                                    <h1>{post.title}</h1>
                                </div>
                                <div>
                                    {isAuth && post.author.id === auth.currentUser.uid && 
                                        (<button className=" bg-red-600 w-10 h-10 rounded-full text-white"
                                        onClick={()=>{
                                        deletePost(post.id);
                                    }}><i className="ri-delete-bin-6-line"></i></button>)}
                                </div>
                            </div>
                            <div id="postTextContainer" className=" py-5 ">
                                <p id="postText" className="">{post.postText}</p>
                                {/* {post.postText} */}
                            </div>
                            <h3 id="author" className=" text-lg font-medium">@{post.author.name}</h3>
                        </div>)
                    )
                })}
            </div>
            </>
        )
}

export default MyBlogs;