import React  from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

const Spinner = ({message}) => (
    <Dimmer active inverted>
        <Loader indeterminate>{message}</Loader>
    </Dimmer>
);

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;