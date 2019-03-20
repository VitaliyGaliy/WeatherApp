import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import actions from '../actions/city'
import Input from "../components/Input";
import Button from "../components/Button";


class Search extends Component {

    submit = ({ newCity }) => {
        const { addCity } = this.props
        addCity({ newCity })

    }

    render() {
        const { handleSubmit } = this.props
        return (
            <>
                <Field name="newCity" type='text' component={Input} />
                <Button handler={handleSubmit(this.submit)}>Add</Button>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    city: state.city
})

const validate = values => {
    const errors = {}

    if (!values.newCity) {
        errors.newCity = 'Name is required.'
    }
    return errors
}

const form = reduxForm({
    form: 'cities',
    validate,
})(Search)

export default connect(mapStateToProps, actions)(form)

