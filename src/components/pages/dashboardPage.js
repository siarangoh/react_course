import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { increaseLikes } from '../../actions/character'

class Dashboard extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <h1> Dashboard likes {this.props.likes} </h1>
                <button onClick={this.props.increaseLikes}> like to this character </button>
                <br/>
                <Link to="/detail"> Detail Page </Link>
                /
                <Link to="/state"> State Page </Link>
                <br/>
                <h3>likes from redux: {this.props.likes}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    likes: state.character.likes
})

export default connect(mapStateToProps, {increaseLikes})(Dashboard);