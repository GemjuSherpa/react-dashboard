import React from 'react'
import {useState} from 'react'
import {Box, useMediaQuery} from '@mui/material'
import {Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import {useGetUserQuery} from '../../state/apis'



const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")  //check if the screen size is desktop
  const [isSidebarOpen, setIsSideBarOpen] = useState(true)

  // make api calls
  const userId = useSelector((state)=> state.global.userId)
  const { data } = useGetUserQuery(userId)
  

  return (
    <Box display={isNonMobile ? "flex" : "block"} width='100%' height='100%'>
      {/* Toogle sidebar */}
      <Sidebar 
        user={data || {}}
        isNonMobile={isNonMobile} 
        drawerWidth="250px" 
        isSidebarOpen={isSidebarOpen} 
        setIsSideBarOpen={setIsSideBarOpen} 
      />
      <Box flexGrow={1}>
          <Navbar 
            user={data || {}}
            isSidebarOpen={isSidebarOpen} 
            setIsSideBarOpen={setIsSideBarOpen} 
          />
          <Outlet />
      </Box>
    </Box>
  )
}

export default Layout