import React  from 'react';
import useResources from '../useResources';
import Item from "../Item/Item";

const ResourceList = ({ resource }) => {
    const resources = useResources(resource);
    return (
        <ol>
            {resources.map(({ id, title, body }) => (
                <Item key={id} title={title} body={body} className='body'/>
            ))}
        </ol>);
};

export default ResourceList;