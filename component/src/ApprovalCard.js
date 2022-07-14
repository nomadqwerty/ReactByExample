import React from "react";

const ApprovalCard = (props)=>{
    console.log(props)
    return(<div>
        <div className='ui cards'>
            <div className="card">
                <div className="content">
                   {props.children}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <button className="ui basic green button">Aprrove</button>
                        <button className="ui basic red button">reject</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default ApprovalCard