import React from 'react';

const Item = ({ title, body, className }) => (
    <li className={className}>
        <h4>{body ? title : null}</h4>
        <p>{body ? body : title}</p>
    </li>
);

export default Item;