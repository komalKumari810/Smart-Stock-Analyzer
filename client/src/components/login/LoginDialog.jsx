import { useState, useContext } from "react";

import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';

import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
   height: 70vh;
   width: 55vh;
`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p {
        margin-top: 15px
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #2874f0;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    font-weight: 600;
`
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: black;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`
const CreateAccount = styled(Typography)`
    font-size: 17px;
    text-align: center;
    color: black;
    font-weight: 600;
    cursor: pointer;
`
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const accountInitialValues = {
    login: {
        view: 'login'
    },
    signup: {
        view: 'signup'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValues = {
    username:'',
    password:''
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    const { setAccount } = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputchange = (e) => {
       setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValuechange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value});
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if (response.status === 200) {
            handleClose();
            setAccount(response.data.data.firstname);
        } else {
            setError(true);
        }
    }

    return (
       <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' }}}>
        <Component>
            {
                account.view === 'login' ?
                <Wrapper>
                       <TextField variant="standard" onChange={(e) => onValuechange(e)} name='username' label="Enter Username" />
                       { error && <Error>Please enter valid username or password</Error> }
                       <TextField variant="standard" onChange={(e) => onValuechange(e)} name='password' label="Enter Password" />
                       <Text>By continuing, you agree to Smart-Stock-Analyzer's Terms to Use and Privacy Policy.</Text>
                       <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                       <Typography style={{ textAlign: 'center' }}>OR</Typography>
                       <RequestOTP>Request OTP</RequestOTP>
                       <CreateAccount onClick ={() => toggleSignup()}>Create an account</CreateAccount>
                    </Wrapper>
                :
                <Wrapper>
                       <TextField variant="standard" onChange={(e) => onInputchange(e)} name='firstname' label="Enter Firstname" />
                       <TextField variant="standard" onChange={(e) => onInputchange(e)} name='lastname' label="Enter Lastname" />
                       <TextField variant="standard" onChange={(e) => onInputchange(e)} name='username' label="Enter Username" />
                       <TextField variant="standard" onChange={(e) => onInputchange(e)} name='email' label="Enter Email" />
                       <TextField variant="standard" onChange={(e) => onInputchange(e)} name='password' label="Enter Password" />
                       <TextField variant="standard" onChange={(e) => onInputchange(e)} name='phone' label="Enter Phone" />
                       <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                    </Wrapper>
            }
        </Component>
       </Dialog>
    ) 
}

export default LoginDialog;

