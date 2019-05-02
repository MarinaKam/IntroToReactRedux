import React from 'react';
import useLocation from '../useLocation';
import SeasonDisplay from '../SeasonDisplay/SeasonDisplay';
import Spinner from '../Spinner/Spinner';

const App = () => {
    const [lat, errorMessage] = useLocation();

    // eslint-disable-next-line no-unused-vars
    let content;
    errorMessage ? content = <div>Error: {errorMessage}</div>
      : lat ? content = <SeasonDisplay lat={lat} />
      : content = <Spinner message="Please accept location request" />;

  return <div className="border red">{content}</div>;
};

export default App;