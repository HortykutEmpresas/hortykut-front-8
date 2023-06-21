import React from "react";
import './Navbar.css'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

function Navbar() {
    return (
        <>
            <AppBar position="static" className="appbar">
                <Toolbar variant="dense" className='toolbar'>
                    <Box className='cursor'>
                        <Typography variant="h5" style={{color: "white"}}>
                            Hortykut 
                        </Typography>
                    </Box>
                    <Box display="flex " justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "white"}}>
                                Venda
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "white"}}>
                                Compra
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "white"}}>
                                Transporte
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "white"}}>
                                Cursos
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "white"}}>
                                Planos
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "white"}}>
                                Sobre Nós
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "white"}}>
                                Suporte
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "white", background: "#ff7b00"}}>
                                Faça Parte
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{color: "white", background: "#464248"}}>
                                    Logout
                                </Typography>
                            </Box>                            
                        </Link>
                    </Box>               

                            <Typography variant="h6" style={{ color: "#2a2a2a" }}>
                                Home
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="start">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "#2a2a2a" }}>
