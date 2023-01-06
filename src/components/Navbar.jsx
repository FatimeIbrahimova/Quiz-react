import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
   
    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" elevation={0}>
                    <Toolbar className='navbar'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" className='nav-first' component="div" sx={{ flexGrow: 1 }}>
                            <NavLink className={({ isActive }) => (isActive ? "styleNav" : null)} ink style={({ isActive }) => isActive ? "styleNav" : null} to="/" style={{ color: "black" }} style={{fontWeight:900}}>Shortly</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSixe: "14px" }}>
                            <NavLink className={({ isActive }) => (isActive ? "styleNav" : null)} to="features" style={{ color: "grey" }}>Features</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink className={({ isActive }) => (isActive ? "styleNav" : null)} to="/pricing" style={{ color: "grey" }}>Pricing</NavLink>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 24 }}>
                            <NavLink className={({ isActive }) => (isActive ? "styleNav" : null)} to="/resources" style={{ color: "grey" }}>Resources</NavLink>
                        </Typography>

                        <Link to="/login" style={{ color: "grey" }}><Button color="inherit">Login</Button></Link>
                        <Link to="/sign"><Button style={{ border: "1px solid #f0f1f6", backgroundColor: "hsl(180, 66%, 49%)", color: "white", borderRadius: 20 }} color="inherit">Sign Up</Button></Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
