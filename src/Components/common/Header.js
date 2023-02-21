import React, { useState } from 'react'
import { AppBar,Toolbar,styled,Box,Typography,InputBase } from '@mui/material'
import { LogoUrl } from '../../constants/Constants'
import { Menu,BookmarkAdd, ExpandMore } from '@mui/icons-material'
import HeaderMenu from './HeaderMenu'
import { Link } from 'react-router-dom'
import { routePath } from '../../constants/route'

const StyledToolBar=  styled(Toolbar)`
background : #121212;
min-height  :56px !important;
padding : 0 115px !important;
justify-content:space-between;

& > * {
    padding: 0 16px;
}

& > div {
    display:flex;
    align-items:center;
    cursor:pointer;
    & > p{
        font-sie:14px;
        font-weight:600;
    }
}
& > p{
    font-sie:14px;
        font-weight:600;

}

`


const InputSearchField = styled(InputBase)`
    background :#ffffff;
    height:30px;
    width:55% ;
    border-radius:5px;
`

const Logo = styled('img')({
        width :64
})


const Header = () => {  

    const [open,setOpen] = useState(null);

    const handleClick = (e) => {
       setOpen(e.currentTarget)
      };
      const handleClose = () => {
        setOpen(null)
      };
  return (
    <AppBar position='static'>
            <StyledToolBar >
               <Link to={routePath.home}><Logo src={LogoUrl} alt='Logo'/></Link> 
                <Box   onClick={handleClick}>
                    <Menu/>
                    <Typography>Menu</Typography>                            
                </Box>
                <HeaderMenu open={open} handleClose={handleClose}/>
                <InputSearchField/>
                <Typography>IMDb<Box component="span">Pro</Box></Typography>
                <Box>
                 <BookmarkAdd/> 
                 <Typography>watchList</Typography>
                </Box>
                <Typography>Sign In</Typography>
                <Box>   
                    <Typography>EN</Typography>
                    <ExpandMore/>
                </Box>
            </StyledToolBar>
    </AppBar>
  )
}

export default Header