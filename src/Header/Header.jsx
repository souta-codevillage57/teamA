import React from 'react';
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/Toolbar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    menuBar: {
        backgroundColor: "#F6F5F5",
        color: "#444",
        padding: "20px",
        fontFamily: 'Georgia'
    },
    toolBar: {
        margin: '0 auto',
        maxWidth: 1024,
        fontSize: "40px",
        fontWeight: 'bold'
    },
})

const Header = () => {
    const classes = useStyles()
    return (
        <div className="root">
            <AppBar position="fixed" className={classes.menuBar}>
                <Toolbar className={classes.toolBar}>
                    Study Pro
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
