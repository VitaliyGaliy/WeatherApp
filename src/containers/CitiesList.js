import React, { Component } from 'react';
import { connect } from 'react-redux'

import actions from '../actions/city'
import deleteCity from "../actions/city";
import Button from "../components/Button";

class CitiesList extends Component {
    delete({ id }) {

        const { deleteCity } = this.props
        deleteCity(id)

    }
    render() {
        const { cities } = this.props
        return (
            <div className='cityListContainer'>
                {
                    cities.map(city => (
                        <div key={city.id}>
                            {`City: ${city.name}, temperature: ${city.temp}`}
                            <Button handler={() => this.delete(city)}>Delete</Button>
                        </div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cities: state.cities
})

export default connect(mapStateToProps, actions)(CitiesList)