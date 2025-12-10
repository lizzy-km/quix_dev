import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { VscBug, VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
import { SiTypescript } from "react-icons/si";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function Layout() {
    const navigate = useNavigate()
    const [menuArr, setMenuArr] = useState<string[]>([]);

    const { pathname } = useLocation()


    useEffect(() => {
        setMenuArr(prev => {
            if (prev) {
                if (!prev.includes(pathname.split('/')[1] + '.tsx')) {
                    return [...prev, pathname.split('/')[1] + '.tsx']
                } else {
                    return prev
                }
            }
            return [pathname.split('/')[1] + '.tsx']
        })



    }, [pathname])




    console.log('menuArr in Layout', menuArr, pathname);

    return (
        <Flex bg={'#d8d8d820'} gap={'1px'} direction={'column'} h="100vh" w="100vw" >
            <Box style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }} w={'100vw'} padding={'8px'} h="48px" color={'#d8d8d8'} bg={'#232425'} >

                <Flex alignItems={'center'} alignContent={'center'} direction={'row'} rounded={'4px'} padding={'3px'} h={'100%'} w={'44px'} color={'#d8d8d8'} bg={'#00273f'} >
                    <VscChevronLeft size={12} />
                    <VscBug size={16} />
                    <VscChevronRight size={12} />
                </Flex>

                <Flex alignItems={'center'} alignContent={'center'} direction={'row'} rounded={'4px'} paddingInline={4} paddingBlock={'4px'} h={'100%'} w={'auto'} color={'#d8d8d8'} border={'1px solid'} bg={'#33333380'} borderColor={'#d8d8d860'} >
                    <Text style={{
                        letterSpacing: 0.3,
                        wordSpacing: 1
                    }} fontSize={'12px'} >Kaung Myat Soe's Portfolio{pathname.split('/').join(" | ")}</Text>
                </Flex>

                <Flex alignItems={'center'} alignContent={'center'} direction={'row'} rounded={'4px'} padding={'3px'} h={'100%'} w={'44px'} color={'#d8d8d8'}  >

                </Flex>

            </Box>

            <Grid alignItems={'start'} alignContent={'start'} h='100%' w={'100vw'} templateColumns={'repeat(32,2fr)'} templateRows={'repeat(12,2fr)'} gap="1px">
                {/* <GridItem h={'100%'} colSpan={1} rowSpan={12}>
                    <Grid w={'60px'} h="100%" color={'#d8d8d8'} bg={'#232425'} >
                        <GridItem w={'100%'} h={'48px'}  >
                            <div style={{
                                width: '100%',
                                minHeight: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backgroundColor: '#d8d8d810'
                            }} onClick={()=>{
                                navigate('/home')
                            }} >
                                <RxAvatar color="#61a3dc" size={24} />
                            </div>
                        </GridItem>


                    </Grid>
                </GridItem> */}
                <GridItem h={'100%'} colSpan={5} rowSpan={12}>
                    <Box paddingInline={2} paddingBlock={4} h="100%" color={'#d8d8d8'} bg={'#232425'} >
                        <SideMenu />
                    </Box>
                </GridItem>

                <GridItem h={'100%'} colSpan={27} rowSpan={12}>
                    <Box padding={0} overflow={'hidden'} maxH={'100%'} h="100%" color={'#d8d8d8'} bg={'#232425'} >
                        <Flex h={'34px'} paddingInline={0} alignItems={'center'} gap={0} borderBottom={'1px solid'} borderColor={'#333333'} >
                            {
                                menuArr?.map((item, index) => {
                                    if (item.length === 0) return null;
                                    return (
                                        <Flex cursor={'pointer'} onClick={() => {
                                            navigate(item.split('.')[0])
                                        }} key={index} h={'34px'} paddingInline={2} alignContent={'center'} alignItems={'center'} gap={0} borderInline={'1px solid #33333380'} borderBottom={pathname.split('/')[1] + '.tsx' === item ? '2px solid #358ef1' : '1px solid #232425'} bg={pathname.split('/')[1] + '.tsx' === item ? '#33333380' : 'transparent'} >
                                            <SiTypescript size={14} />
                                            <Text paddingInline={1} paddingBlock={1} bg={'transparent'} fontSize={'14px'}  >{item}</Text>
                                            {pathname.split('/')[1] + '.tsx' === item ? <Box cursor={'pointer'} onClick={(e) => {
                                                e.stopPropagation();
                                                setMenuArr((prev) => {
                                                    if (prev) {
                                                        const filtered = (prev as string[]).filter(i => i !== item);
                                                        if (filtered.length === 0) {
                                                            navigate('/home');
                                                        }
                                                        navigate(filtered[0].split('.')[0]);
                                                        return filtered;
                                                    }
                                                    return [];
                                                })
                                            }}  > <IoIosClose size={24} /></Box> : ''}




                                        </Flex>
                                    )
                                })
                            }


                        </Flex>

                        <Box padding={4} overflow={'auto'} w='100%' maxW={'100%'} maxH={'95%'} h="95%" color={'#d8d8d8'} bg={'#232425'}>
                            <Outlet />
                        </Box>

                    </Box>
                </GridItem>

            </Grid>
        </Flex>

    )
}