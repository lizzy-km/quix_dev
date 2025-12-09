import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <Flex gap={'1px'} direction={'column'} h="100vh" w="100vw" >
            <Box padding={2} h="40px" color={'#d8d8d8'} bg={'#232425'} >
                Header Content
            </Box>

            <Grid  alignItems={'start'} alignContent={'start'} h='100%' w={'100vw'} templateColumns={'repeat(12,2fr)'} templateRows={'repeat(12,2fr)'} gap="1px">
                <GridItem h={'100%'} colSpan={2} rowSpan={12}>
                    <Box padding={2} h="100%" color={'#d8d8d8'} bg={'#232425'} >
                        Side Content
                    </Box>
                </GridItem>

                <GridItem h={'100%'} colSpan={10} rowSpan={12}>
                    <Box maxH={'100%'} h="100%" color={'#d8d8d8'} bg={'#232425'} >
                        <Outlet />
                    </Box>
                </GridItem>

            </Grid>
        </Flex>

    )
}