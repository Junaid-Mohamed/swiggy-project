import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"",
                location:"",
                avatar_url:"",
                bio:""

            }
        }

        console.log("child Constructor");
    }

    async componentDidMount(){
        console.log("child did mount");
        const data = await fetch("https://api.github.com/users/Junaid-Mohamed")
        const json = await data.json();

        this.setState({
            userInfo:json
        })
        console.log(json);
    }

    render(){
        console.log("child render")

        const {avatar_url,bio,name,location} = this.state.userInfo;


        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <p>Bio: {bio}</p>
            </div>
        )
    }

}

export default UserClass;