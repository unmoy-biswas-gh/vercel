import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UploadLogo from './UploadLogo';
import pic from '../../assets/gesh.png';
import jungle from '../../assets/jungle.jpg';

const SetupOrg = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/setup');
    };

    return (
        <Box style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid container style={{ height: '100%', width: '100%' }}>
            <Grid item xs={12} md={6} style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,26,0,0.5), rgba(0,26,0,0.5)), url(${jungle})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}>
                    <Box style={{
                        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.36) 3.9%, rgba(255, 255, 255, 0.00) 100.68%)',
                        padding: "45px 40px 61px",
                        borderRadius: "18px",
                        maxWidth: '80%',
                        textAlign: 'center',
                        color: 'white',
                        width: '50%',
                        backgroundFilter: 'blur(2px)'
                    }}>

                        <Typography variant="h4" style={{ fontWeight: 400, fontSize: 28, fontFamily: "Inter", textAlign: 'left' }}>
                            <span style={{ fontWeight: 700 }}>Empowering</span>  Your Business with Comprehensive <span style={{ fontWeight: 700 }}>Sustainability Insights</span>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box style={{ maxWidth: '500px', width: '100%', padding: '20px' }}>
                        <img src={pic} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
                        <Typography variant="h4" gutterBottom style={{ fontFamily: 'Inter', fontSize: '36px', fontWeight: 700, marginBottom: "2rem" }}>
                            Setup your Organization Profile!
                        </Typography>
                        <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '4rem', fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: '#8692A6' }}>
                            For the purpose of industry regulation, your details are required.
                        </Typography>
                        <UploadLogo />
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{
                                marginTop: '4rem',
                                width: 500, padding: "16px 24px",
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
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SetupOrg;
