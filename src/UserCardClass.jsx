import React from "react";

export class UserCardClass extends React.Component{
    render(){
        return (
            <div className="card">
                <h2 className="name">{this.props.user.name}</h2>
                <div className="body">
                <div className="label">Age:</div>
                <div>{this.props.user.age}</div>
                <div className="label">Phone:</div>
                <div>{this.props.user.phoneNumber}</div>
                <div className="label">Address:</div>
                <div>{this.props.user.address}</div>
                </div>
            </div>
        )
    }
}