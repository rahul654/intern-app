import React from 'react'

function Card(props) {
    return (
        <div style={{ padding: '10px', width: '180px', border: '1px solid #000', borderRadius: '8px' }}>
            <div style={{ width: '25px', height: '25px', backgroundColor: 'gray', borderRadius: "50%" }}></div>
            <div style={{ margin: '10px 0', fontWeight: '540', fontSize: '17px' }}>
                {props.text}
            </div>
            <div style={{ color: '#666' }}>
                Technologies Used specified in brief
            </div>
        </div>
    )
}

export default Card
