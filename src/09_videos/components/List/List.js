import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const List = ({list, nextPage}) => {
  if (!list) return <div>Loading...</div>;
  const item = list.map(({poster_path, id, title}) => (
      <div className="card my-2 mx-auto mw-100" key={`${id}-${title}`} style={{ width: '17rem'}}>
        { poster_path ? <img src={ `https://image.tmdb.org/t/p/w185_and_h278_bestv2${ poster_path }` }
                              className="card-img-top w-100"
                              alt={ title }/> :
            <div className="my-4 text-center text-danger">Sorry Image Not Found</div>
        }
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <Link to={`/movie/${id}`} className="card-link">Read More</Link>
          </div>
      </div>
  ));
  return(
      <Fragment>
        <div className="d-flex flex-wrap justify-content-between align-items-stretch">
          {list && item}
        </div>
        <div className="mx-auto my-3 text-center">
          <button
              type="button"
              className="btn btn-primary"
              onClick={nextPage}
          >Load More</button>
        </div>
      </Fragment>
  );
};

export default List;