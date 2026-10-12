import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <div>

                <div className="navbar">
                    <p>avaliable</p>
                    <h3>{props.rate}</h3>
                </div>
                <div className="image">
                    <img src={props.img} alt="" />
                </div>

                <div className="center">
                    <h3>{props.name}</h3>
                    <h6>{props.role}</h6>
                    <h2>{props.company}</h2>
                    <div className="line">
                        <h5>{props.skill1}</h5>
                        <h5>{props.skill2}</h5>
                        <h5>{props.skill3}</h5>
                        <h5>{props.more}</h5>
                    </div>
                </div>

                <div className="buttom">
                    <p>{props.description}</p>

                    <h3>view profile</h3>
                </div>
            </div>
        </div>
    )
}

export default Card