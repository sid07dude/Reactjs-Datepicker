import React, { Component, Fragment } from 'react';
import SignIn from './signIn';

class ModalPopup extends Component {
    constructor() {
        super();
        this.state = {
            showModalPopup: false
        }
    }
    isShowSignIn = (status) => {
        this.setState({ showModalPopup: status });
    };

    render() {
        return (
            <Fragment>
                <h3 align="center">Demo of Modal Pop up in Reactjs</h3>
                <header>
                    <Fragment>
                        <div
                            className="nav-item"
                            onClick={() => this.isShowSignIn(true)}>
                            <button align="center">Modal Pop up</button>
                        </div>
                    </Fragment>
                </header>
                <SignIn
                    showModalPopup={this.state.showModalPopup}
                    onSignInClose={this.isShowSignIn}
                ></SignIn>
            </Fragment>
        )
    }
}

export default (ModalPopup)

