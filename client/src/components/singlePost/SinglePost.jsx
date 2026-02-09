import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="img/post.png" alt="" />
        <h1 className="singlePostTitle">
          TitleTitleTitleTitleTitle
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuther">
            Auther: <b>Saya</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div> 
          <p className="singlePostDesc">
            descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescr
            iptiondescriptiondescriptiondescriptiondescriptiondescriptiondescripti
            ondescriptiondescriptiondescriptiondescription
          </p>
      </div>
    </div>
  );
}
