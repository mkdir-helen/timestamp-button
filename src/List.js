import React from 'react';
import Main from './UnorderedList';

const List = (props) => {
    return(
        <ul>
            {props.times.map((item, index) => {
                return (
                    <li key={index}>
                        {item.toLocaleString()}
                    </li>
                )
            })}
        </ul>
    )
}

export default List;