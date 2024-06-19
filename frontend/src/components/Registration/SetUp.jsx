import React from "react";
import { Grid, Box, Typography, TextField, Button, Checkbox, FormControlLabel, FormControl, Select, MenuItem, InputLabel, InputAdornment } from '@mui/material';
import PasswordInput from './PasswordInput';
import { useNavigate } from 'react-router-dom';
import pic from '../../assets/gesh.png';
import windmill from '../../assets/windmill.jpg';

const SetUp = () => {
    const navigate = useNavigate();

    const currencies = [
        {
            value: 'AED',
            label: 'AED',
        },
        {
            value: 'USD',
            label: 'USD',
        },
        {
            value: 'EUR',
            label: 'EUR',
        },
        {
            value: 'INR',
            label: 'INR'
        }
    ];

    const [employee, setEmployee] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [currency, setCurrency] = React.useState('AED');
    const [amount, setAmount] = React.useState('');
    const [sector, setSector] = React.useState('');
    const [industry, setIndustry] = React.useState('');

    const handleEmployeeChange = (event) => {
        setEmployee(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSectorChange = (event) => {
        setSector(event.target.value);
    };

    const handleIndustryChange = (event) => {
        setIndustry(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/invite');
    };

    return (
        <Box style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Grid container style={{ height: "100%", width: "100%" }}>
                <Grid item xs={12} md={6} style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,26,0,0.5), rgba(0,26,0,0.5)), url(${windmill})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <Box style={{
                        backgroundColor: "rgba(18, 78, 57, 0.4)",
                        padding: "45px 40px 61px",
                        borderRadius: "18px",
                        maxWidth: '80%',
                        textAlign: 'center',
                        color: 'white',
                        width: '50%',
                    }}>
                        <Typography variant="h4" style={{ fontWeight: 400, fontSize: 28, fontFamily: "Inter", textAlign: 'left' }}>
                            <span style={{ fontWeight: 700 }}>Empowering</span>  Your Business with Comprehensive <span style={{ fontWeight: 700 }}>Sustainability Insights</span>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box style={{ maxWidth: "500px", width: "100%", padding: "20px" }}>
                        <img src={pic} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
                        <Typography variant="h4" gutterBottom style={{ fontFamily: "Inter", fontSize: "36px", fontWeight: 700, marginBottom: '2rem' }}>
                            Setup Your Organization Details
                        </Typography>
                        <Typography variant="body1" style={{ marginTop: "16px", marginBottom: "3rem", fontFamily: "Inter", fontWeight: 400, fontSize: "36", color: "#8692A6" }}>
                            For the purpose of industry regulation, your details are required.
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Company Name"
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {

                                        '&.Mui-focused fieldset': {
                                            borderColor: '#369D9C',

                                        },
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#369D9C', // Focused label color
                                    },
                                    '& .MuiFormHelperText-root': {
                                        color: 'red', // Custom helper text color
                                    },
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Inter',
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontFamily: 'Inter',
                                    },
                                }}
                            />
                            <FormControl style={{ width: '49%', marginTop: '1rem' }} sx={{
                                    '& .MuiOutlinedInput-root': {

                                        '&.Mui-focused fieldset': {
                                            borderColor: '#369D9C',

                                        },
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#369D9C', // Focused label color
                                    },
                                    '& .MuiFormHelperText-root': {
                                        color: 'red', // Custom helper text color
                                    },
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Inter',
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontFamily: 'Inter',
                                    },
                                }}>
                                <InputLabel id="demo-simple-select-label">Company Size</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Company Size"
                                    value={employee}
                                    onChange={handleEmployeeChange}
                                >
                                    <MenuItem value={2 - 10} sx={{fontFamily: "Inter"}}>2-10</MenuItem>
                                    <MenuItem value={11 - 50} sx={{fontFamily: "Inter"}}>11-50</MenuItem>
                                    <MenuItem value={51 - 200} sx={{fontFamily: "Inter"}}>51-200</MenuItem>
                                    <MenuItem value={201 - 500} sx={{fontFamily: "Inter"}}>201-500</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl style={{ width: '49%', marginTo: '1rem', marginLeft: '1%', marginTop: '1rem' }} sx={{
                                    '& .MuiOutlinedInput-root': {

                                        '&.Mui-focused fieldset': {
                                            borderColor: '#369D9C',

                                        },
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#369D9C', // Focused label color
                                    },
                                    '& .MuiFormHelperText-root': {
                                        color: 'red', // Custom helper text color
                                    },
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Inter',
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontFamily: 'Inter',
                                    },
                                }}>
                                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Country"
                                    value={country}
                                    onChange={handleCountryChange}
                                >
                                    <MenuItem value={1} sx={{fontFamily: "Inter"}}>IND</MenuItem>
                                    <MenuItem value={2} sx={{fontFamily: "Inter"}}>USA</MenuItem>
                                    <MenuItem value={3} sx={{fontFamily: "Inter"}}>UK</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                label="Average Revenue"
                                variant="outlined"
                                value={amount}
                                onChange={handleAmountChange}
                                fullWidth
                                type="number"
                                sx={{
                                    '& .MuiOutlinedInput-root': {

                                        '&.Mui-focused fieldset': {
                                            borderColor: '#369D9C',

                                        },
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#369D9C', // Focused label color
                                    },
                                    '& .MuiFormHelperText-root': {
                                        color: 'red', // Custom helper text color
                                    },
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Inter',
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontFamily: 'Inter',
                                    },
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <TextField
                                                select
                                                value={currency}
                                                onChange={handleCurrencyChange}
                                                variant="standard"
                                                style={{ width: 80, fontWeight: 'bold' }}
                                                InputProps={{disableUnderline: true,}}
                                                SelectProps={{
                                                    MenuProps: {
                                                      PaperProps: {
                                                        sx: {
                                                          '& .MuiMenuItem-root': {
                                                            fontWeight: 'bold',
                                                            fontFamily: 'Inter',
                                                          },
                                                        },
                                                      },
                                                    },
                                                  }}
                                            >
                                                {currencies.map((option) => (
                                                    <MenuItem
                                                        key={option.value}
                                                        value={option.value}
                                                        sx={{fontWeight: 'bold', fontFamily: "Inter"}}
                                                    >
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </InputAdornment>
                                    ),
                                }}
                                style={{ marginTop: 16, marginBottom: 20, color: "red" }}
                            />
                            <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', }} />
                            <FormControl fullWidth style={{ marginTop: '1rem' }} sx={{
                                    '& .MuiOutlinedInput-root': {

                                        '&.Mui-focused fieldset': {
                                            borderColor: '#369D9C',

                                        },
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#369D9C', // Focused label color
                                    },
                                    '& .MuiFormHelperText-root': {
                                        color: 'red', // Custom helper text color
                                    },
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Inter',
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontFamily: 'Inter',
                                    },
                                }}>
                                <InputLabel id="demo-simple-select-label">Sector</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Sector"
                                    value={sector}
                                    onChange={handleSectorChange}
                                >
                                    <MenuItem value={1} sx={{fontFamily: "Inter"}}>Primary</MenuItem>
                                    <MenuItem value={2} sx={{fontFamily: "Inter"}}>Secondary</MenuItem>
                                    <MenuItem value={3} sx={{fontFamily: "Inter"}}>Tertiary</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth style={{ marginTop: '1rem' }} sx={{
                                    '& .MuiOutlinedInput-root': {

                                        '&.Mui-focused fieldset': {
                                            borderColor: '#369D9C',

                                        },
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#369D9C', // Focused label color
                                    },
                                    '& .MuiFormHelperText-root': {
                                        color: 'red', // Custom helper text color
                                    },
                                    '& .MuiInputBase-input': {
                                        fontFamily: 'Inter',
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontFamily: 'Inter',
                                    },
                                }}>
                                <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Industry"
                                    value={industry}
                                    onChange={handleIndustryChange}
                                >
                                    <MenuItem value={1} sx={{fontFamily: "Inter"}}>Technology</MenuItem>
                                    <MenuItem value={2} sx={{fontFamily: "Inter"}}>Textile</MenuItem>
                                    <MenuItem value={3} sx={{fontFamily: "Inter"}}>Media</MenuItem>
                                </Select>
                            </FormControl>
                            <button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{
                                    marginTop: '16px',
                                    padding: "16px 24px",
                                    width: 500,
                                    borderRadius: 6,
                                    backgroundImage: 'linear-gradient(102deg, #369D9C 0%, #28814D 100%)',
                                    fontWeight: 900,
                                    fontSize: "16px",
                                    fontFamily: "Inter",
                                    color: '#FFF',
                                    border: '1px solid #DDD',
                                    letterSpacing: '0.5px',
                                    cursor: 'pointer'
                                }}
                            >
                                Next
                            </button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SetUp;
