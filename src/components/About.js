import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
  constructor(){
    super();
    console.log("Parent constructor");
  }


  componentDidMount(){
    console.log("Parent did mount.")
  }

  

  render(){
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <User name={"Junaid (functional component)"}/>
        <UserClass name={"Junaid (Class component)"}/>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <User name={"Junaid (functional component)"}/>
//       <UserClass name={"Junaid (Class component)"}/>
//     </div>
//   );
// };

export default About;
