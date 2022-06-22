import React from "react";
//importing css
import "./Post.css";
//importing FontAwesomeIcon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp,faThumbsDown,faComment,faEllipsis} from '@fortawesome/free-solid-svg-icons'
const Post = (props) => {
  //getting items from props
  const {title,image,createdAt}=props;
  const getTimeAgo=(oldDate,presentDate)=>{
    console.log(`old date year: ${oldDate.getFullYear()} \n new date year : ${presentDate.getFullYear()}`);
    console.log(`old date months: ${oldDate.getMonth()+1} \n new date month : ${presentDate.getMonth()+1}`);
    console.log(`old date day: ${oldDate.getDate()} \n new date day : ${presentDate.getDate()}`);
    console.log(`old date minute: ${oldDate.getMinutes()} \n new date minute : ${presentDate.getMinutes()}`);
    console.log(`old date hour: ${oldDate.getHours()} \n new date hour: ${presentDate.getHours()}`);
    if(oldDate.getFullYear()<presentDate.getFullYear()){
      return (`${presentDate.getFullYear()-oldDate.getFullYear()} years ago`);
      }else if(oldDate.getMonth()<presentDate.getMonth()){
      return (`${(presentDate.getMonth()+1)-(oldDate.getMonth()+1)} months ago`);
      }
      else if(oldDate.getDate()<presentDate.getDate()){
        return (`${presentDate.getDate()-oldDate.getDate()} day ago`)
      }
      else if(oldDate.getHours()<presentDate.getHours()){
      return (`${presentDate.getHours()-oldDate.getHours()} hours ago`);
      }
      else{
      return (`${presentDate.getMinutes()-oldDate.getMinutes()} minutes ago`)
      }
      
  }
  return (
    <div className="Post">
      <div className="user">
        <h4>M</h4>
        <p>Manav Dixit</p>
      </div>
    <div className='postImageContainer'>
      <img
        src={`http://192.168.1.3:8000/${image}`}
        alt="Post"
      />
      </div>
      <div className="timeAgo">
        <p>{getTimeAgo(new Date(createdAt),new Date())}</p>
      </div>
      <span className="title">
        <p>{title}</p>
      </span>
      <div className="likeAndCommentSection">
          <ul>
              <li><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon><p>1540</p></li>
              <li><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon><p>154</p></li>
              <li><FontAwesomeIcon icon={faComment}></FontAwesomeIcon><p>1540</p></li>
              <li><FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon><p>More</p></li>
          </ul>
      </div>
    </div>
  );
};

export default Post;
