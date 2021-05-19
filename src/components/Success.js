import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {

    
    render() {
        return (
            <MuiThemeProvider>
               <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <p> Thank you for your submission</p>
                    <p> We will get back to you through your email</p>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success
