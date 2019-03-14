import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {

    renderField = ({ input, label, type, meta: { touched, error } }) => {
        // console.log(input);
        const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
        return(
            <div className="form-group">
                <label htmlFor={`${type}${label}`}>{label}</label>
                <input
                    {...input}
                    type={type}
                    id={`${type}${label}`}
                    placeholder={label}
                    className={className}
                    autoComplete='off'
                />
                {touched && (error && <span className="form-text text-danger">{error}</span>)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        // Do something with the form values
        this.props.onSubmit(formValues);
    };

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return(
            <form
                className='col-sm-8 col-md-6 col-lg-4 mx-auto'
                onSubmit={handleSubmit(this.onSubmit)}
            >
                <Field
                    name="title"
                    type="text"
                    component={this.renderField}
                    label="Title"/>
                <Field name="description" type="text" component={this.renderField} label="Description"/>
                <button type="submit" className="btn btn-primary px-4 mr-2" disabled={submitting}>Submit</button>
                <button type="button" className="btn btn-secondary px-4" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required a Title!';
    }
    if (!values.description) {
        errors.description = 'Required a Description!';
    }
    return errors;
};

export default reduxForm({
    form: 'StreamForm', // a unique name for this form
    validate
})(StreamForm);
