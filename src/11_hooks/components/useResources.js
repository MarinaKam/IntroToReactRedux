import { useState, useEffect } from 'react';
import axios from 'axios';
import {URL} from '../api/JSONResource';

const useResources = resource => {
    const [ resources, setResources ] = useState([]);

    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(`${URL}${resource}`);
                setResources( response.data );
            })(resource);
        },
        [resource]);

    return resources;
};

export default useResources;