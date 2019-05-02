import React  from 'react';
import useResources from '../useResources';
import Item from "../Item/Item";

const UserList = ({ resource }) => {
    const resources = useResources(resource);
    return (
        <ol>
            {resources.map(({ id, username, website }) => (
                <Item key={id} title={username} body={website} className='users'/>
            ))}
        </ol>);
};

export default UserList;