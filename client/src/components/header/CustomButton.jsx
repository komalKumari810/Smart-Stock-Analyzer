import { useState, useContext } from 'react';

import { Box, Button, Typography, styled } from '@mui/material';

import { DataContext } from '../../context/DataProvider';

import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p {
        margin-left: 60px;
        font-size: 18px;
        align-items: center;
    }
`

const LoginButton = styled(Button)`
    color: grey;
    background: #FFFFFF;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            <Typography>Home</Typography>
            <Typography>ELearning</Typography>
            <Typography>Courses</Typography>
            <Typography>News</Typography>
            <Typography>AboutUs</Typography>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                      <LoginButton varient="contained" onClick={() => openDialog()}>Login</LoginButton>
            }
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;