import React from 'react';


function Cakelist(props){
    return(
        <div>
            <select>
                <option> {props.category[1]}</option>
            </select>
        </div>
    );
}


export default Cakelist;

