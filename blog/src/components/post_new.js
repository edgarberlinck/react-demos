import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField (field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return(
            <div className={className}>
                <label className="control-label">{field.label}</label>
                {
                    field.textArea ? <textarea className="form-control" { ...field.input } /> : <input type="text" className="form-control" { ...field.input } />
                }
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render () {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" label="Title" component={this.renderField} />
                <Field name="categories"  label="Categories" component={this.renderField} />
                <Field name="content" label="Post Content" textArea={true} component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger"> Cancel </Link>
            </form>
        )
    }
}

function validate (values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content please!";
    }
    /**
     * Se errors estiver vazio o form está correto, se tiver qualquer propriedade o form é considerado inválido
     */
    return errors;
}

export default reduxForm({
    form: 'PostsNewForm' 
    /** 
     * Nome do form, deve ser único já que estamos sincronizando todos os forms
     * no mesmo estado (form, no caso.)
     */
    ,validate
})(
    connect(null, { createPost })(PostsNew)
);