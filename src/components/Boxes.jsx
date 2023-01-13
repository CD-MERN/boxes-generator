import React from 'react';

const Boxes = ({boxes}) => {
    const setStyle = (box) => {
        return {
            backgroundColor: box.color,
            width: `${box.size}px`,
            height: `${box.size}px`,
            border: `2px solid black`,
            marginRight: `10px`,
            marginLeft: `10px`,
            display: `inline-block`
        }
    }
    return (
        <div className="container">
            <h2>Boxes</h2>
            <div className="row align-items-center">
                {boxes.map((box, index) => (
                    <div className="" key={index} style={setStyle(box)}></div>
                ))}
            </div>
        </div>
    );
}
export default Boxes;