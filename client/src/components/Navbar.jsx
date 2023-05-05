import React, {useState} from 'react'
import {LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined} from '@mui/icons-material'
import FlexBetween from '../components/FlexBetween'
import {useDispatch} from 'react-redux'
import {setMode} from '../state/index'
import profileImage from '../assets/profile.png'
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material'


const Navbar = ({isSideBarOpen, setIsSideBarOpen}) => {
  const dispatch = useDispatch()
  const theme = useTheme()

  return <AppBar sx={{position: 'static', background:'none', boxShadow: 'none'}}>
    <Toolbar sx={{justifyContent: 'space-between'}}>
      {/* Left Side navbar */}
      <FlexBetween>
        <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
          <MenuIcon />
        </IconButton>
        <FlexBetween backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
          <InputBase placeholder='Search...'/>
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      </FlexBetween>

      {/* Right side navbar */}
      <FlexBetween gap='1.5rem'>
        <IconButton onClick={()=> dispatch(setMode())}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined sx={{fontSize: '25px'}} />
          ) : (
            <LightModeOutlined sx={{fontSize: '25px'}} />
          )}
        </IconButton>
        <IconButton>
          <SettingsOutlined sx={{fontSize: '25px'}} />
        </IconButton>
      </FlexBetween>
    </Toolbar>
  </AppBar>
}

export default Navbar