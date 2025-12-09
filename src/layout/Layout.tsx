import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { LuFiles } from "react-icons/lu";
import { VscBug, VscChevronLeft, VscChevronRight, VscDebugBreakpointData } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

export default function Layout() {
    return (
        <Flex gap={'1px'} direction={'column'} h="100vh" w="100vw" >
            <Box padding={'8px'} h="48px" color={'#d8d8d8'} bg={'#232425'} >
                <Flex alignItems={'center'} alignContent={'center'} direction={'row'} rounded={'4px'} padding={'3px'} h={'100%'} w={'44px'} color={'#d8d8d8'} bg={'#0D5EA6'} >
                    <VscChevronLeft size={12} />
                    <VscBug size={16} />
                    <VscChevronRight size={12} />
                </Flex>


            </Box>

            <Grid alignItems={'start'} alignContent={'start'} h='100%' w={'100vw'} templateColumns={'repeat(32,3fr)'} templateRows={'repeat(12,2fr)'} gap="1px">
                <GridItem h={'100%'} colSpan={1} rowSpan={12}>
                    <Grid w={'60px'} h="100%" color={'#d8d8d8'} bg={'#232425'} >
                        <GridItem w={'100%'} h={'48px'}  >
                            <NavLink style={{
                                width: '100%',
                                minHeight: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} to={'/home'}>
                                <LuFiles size={24} />
                            </NavLink>
                        </GridItem>


                    </Grid>
                </GridItem>
                <GridItem h={'100%'} colSpan={5} rowSpan={12}>
                    <Box padding={4} h="100%" color={'#d8d8d8'} bg={'#232425'} >
                        <SideMenu />
                    </Box>
                </GridItem>

                <GridItem h={'100%'} colSpan={26} rowSpan={12}>
                    <Box padding={8} maxH={'100%'} h="100%" color={'#d8d8d8'} bg={'#232425'} >
                        <Outlet />
                    </Box>
                </GridItem>

            </Grid>
        </Flex>

    )
}