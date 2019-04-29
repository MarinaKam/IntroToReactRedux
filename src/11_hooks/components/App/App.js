import React, { useState }  from 'react';
import Button from "../Button/Button";

const App = () => {
    const [resource, setResource] = useState('posts');
    return (
        <section className="ui container" >
           <div className='py-3'>
               <Button onChange={() => setResource('posts')} title='Posts'/>
               <Button onChange={() => setResource('todos')} title='Todos'/>
           </div>
            <div>
                { resource }
            </div>
        </section>
    );
};

export default App;