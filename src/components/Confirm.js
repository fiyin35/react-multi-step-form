import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
     //function to take the user back
     goBack = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: {firstname, lastname, email, occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider>
               <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    
                    <List>
                        <ListItem 
                        primaryText="Firstname"
                        secondaryText={firstname} />
                        <ListItem 
                        primaryText="Lastname"
                        secondaryText={lastname} />
                        <ListItem 
                        primaryText="Email"
                        secondaryText={email} />
                        <ListItem 
                        primaryText="Occupation"
                        secondaryText={occupation} />
                        <ListItem 
                        primaryText="City"
                        secondaryText={city} />
                        <ListItem 
                        primaryText="Bio"
                        secondaryText={bio} />
                    </List>
                    <RaisedButton 
                    label="Confirm & Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue} />

                     <RaisedButton 
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.goBack} />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15,
        
    }
}

export default Confirm
