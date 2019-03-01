import React from 'react';

const StreamCreate = () => (
  <section className='mt-4'>
      <h1>Create a Stream</h1>
      <form className='col-sm-8 col-md-6 col-lg-4 mx-auto'>
          <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" className="form-control" id="title" />
          </div>
          <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input type="text" className="form-control" id="description" />
          </div>
          <button type="submit" className="btn btn-primary px-4">Submit</button>
      </form>
  </section>
);

export default StreamCreate;