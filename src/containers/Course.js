import React ,{useEffect} from "react";

export default function Course(props) {  
  const {id, title} = props.match.params;
  useEffect(() => {   
    console.log(props)
  },[props]);
  
  return (
    <div>
      <h2>You selected course: </h2>
      <p>Id : {id}</p>
      <p>Title: {title}</p>
    </div>
  );
}