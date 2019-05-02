import React, { useState }  from 'react';
import Button from "../Button/Button";
import ResourceList from "../ResourceList/ResourceList";
import UserList from "../UserList/UserList";

const App = () => {

    const [resource, setResource] = useState('posts');

    return (
        <section className="ui container" >
           <div className='py-3'>
               <Button onChange={() => setResource('posts')} title='Posts'/>
               <Button onChange={() => setResource('todos')} title='Todos'/>
               <Button onChange={() => setResource('users')} title='Users'/>
           </div>
            <div>
                { resource === 'users'
                    ? <UserList resource={ resource }/>
                    : <ResourceList resource={resource}/>
                }
            </div>
        </section>
    );
};

export default App;