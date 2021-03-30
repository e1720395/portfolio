import React from 'react';



export default function ContactItem({icon,text1,title}) {
    return (
        <div className="ContactItem">
            <div className="contact">
                <img src={icon} alt="" />
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text1}</p>
                    {/* <p>{text2}</p> */}
                </div>
            </div>
        </div>
    )
}