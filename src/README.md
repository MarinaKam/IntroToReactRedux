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