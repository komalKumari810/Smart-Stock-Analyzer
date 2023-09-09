import { Box, Button, styled } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > div {
        margin-left: 100px;
        font-size: 16px;
        aligh-items: center;
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
    return (
        <Wrapper>
            <LoginButton varient="contained">Login</LoginButton>
            <Box>
                <DehazeIcon />
            </Box>
        </Wrapper>
    )
}

export default CustomButtons;