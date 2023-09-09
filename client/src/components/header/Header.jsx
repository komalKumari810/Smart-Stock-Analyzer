import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material';

import Search from './Search';
import CustomButtons from './CustomButton';

const StyledHeader = styled(AppBar)`
    background: grey;
    height: 55px;
`

const Header = () => {
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <Box>
                    <Typography>SSA</Typography>
                </Box>
                <Search />
                <CustomButtons />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;