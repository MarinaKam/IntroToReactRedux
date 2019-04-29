````
        Action     |     Method    |    Route       |    Response    |
----------------------------------------------------------------------
 List all records  |       GET     |   /streams     |array of records|
----------------------------------------------------------------------
 Get one particular|       GET     |   /streams/:id | single record  |
       record      |               |                |                |
----------------------------------------------------------------------
 Create record     |      POST     |   /streams     | single record  |
----------------------------------------------------------------------
 Update ALL prop.  |
  of a record      |       PUT     |   /streams/:id | single record  |
----------------------------------------------------------------------
 Update SOME prop. |
 of a record       |     PATCH     |   /streams/:id | single record  |
----------------------------------------------------------------------
 Delete a record   |     DELETE    |   /streams /:id|  nothing       |
----------------------------------------------------------------------
````


```
       Name              |                Goal
----------------------------------------------------------------------
    useState             | Allow a functional component to use
                         | component-level state   
----------------------------------------------------------------------
    useEffect            | Allow a functional component to use
                         | 'lifecycle method'
----------------------------------------------------------------------
    useContext           | Allow a functional component to use
                         | the context system
----------------------------------------------------------------------
    useRef               | Allow a functional component to use
                         | the ref system
----------------------------------------------------------------------
    useReducer           | Allow a functional component to store
                         | data through a 'reducer'
----------------------------------------------------------------------


```