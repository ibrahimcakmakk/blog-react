import { getDocs, collection} from "firebase/firestore";
import "./post.css";
import React,{useState,useEffect} from "react";
import {db} from "../../firebase-config"


export default function Post() {
  const [postList,setPostList] = useState([])
  const postCollectionRef = collection(db,"posts")


  useEffect(()=>{
    const getPosts = async ()=>{
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getPosts();
  })
  return (
    <div className="singlePost">
    <div >
      {postList.map((post)=>{
        return(
          <>
          <img
        className="postImg"
        src={post.image}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          
        </div>
        <span className="postTitle">
        {post.title}
        </span>
        <hr />
        <span className="postDate">{post.author.name}</span>
      </div>
      <p className="postDesc">
        {post.postText}
      </p>
      
      <br />
      <hr class="rounded"></hr>
      <br />
      </>
        )
      })}
      
    </div>
    </div>
  );
}