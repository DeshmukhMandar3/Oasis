import React from 'react'
import Loader from '../../Components/Loader'
import ErrorIndicator from '../../Components/Error'
import EditDetails from '../../Components/Inventory/EditDetails'
import EditSpecs from '../../Components/Inventory/EditSpecs'

import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../Redux/app.hooks'
import { PRODUCT_ACTIONS, STATE_ACTIONS } from '../../Redux/product/product.actions'
import {Box, Flex, IconButton, Image, Input, SimpleGrid, Stack, Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue,Button} from '@chakra-ui/react'
import { GrPowerReset } from 'react-icons/gr'
import { BiAddToQueue } from 'react-icons/bi'
import CustomEditable from '../../Components/Inventory/CustomEditable'

const ProductPage = () => {
    const router = useRouter()
    const { loading, error, edited, id } = useAppSelector(store=>store.Product)
    const dispatch = useAppDispatch()
    const teal = useColorModeValue('brand.200', 'brand.100')

    React.useEffect(()=>{
        dispatch(STATE_ACTIONS.setID(router.query.id))
    },[])

    React.useEffect(()=>{
        dispatch(PRODUCT_ACTIONS.getData(id))
    }, [id])
    
  return (
    <Box w="100%">
        {
            loading? <Loader/>:
            // error? <ErrorIndicator/>:
            edited && 
            <Flex direction="column" gap="30px">
                <Stack direction={{base:"column", md:"row"}} justify="center" align="center" w="100%" border="0px solid" borderColor="brand.200">
                    <SimpleGrid columns={{base:2, md:4, lg:5}} w="100%" gap={4} m="0 auto" border="5px solid" borderColor="brand.200" p="20px">
                        {edited.image.map((src, i)=>
                            <Flex h={{base:"150px", md:"250px"}}  key={i} border="5px solid" borderColor="gray.800" bg="gray.500">
                                <Image w="100%"  objectFit="contain" src={src} alt={edited.product_name}/>
                            </Flex>)}
                    </SimpleGrid>
                    <Flex align="center" justify="center">
                        <IconButton  colorScheme='teal' aria-label='add image' size='sm' icon={<BiAddToQueue/>}/>
                    </Flex>
                </Stack>
                <Box pr={{base:0, md:"30px"}}>
                    <Tabs colorScheme='teal'>
                        <TabList>
                            <Tab>Details</Tab>
                            <Tab>Description</Tab>
                            <Tab>Specification</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <EditDetails data={edited}/>
                            </TabPanel>
                            <TabPanel>
                                <CustomEditable field="description" value={edited.description} w={{base:"100%", md:"60%"}} multiline={true}/>
                            </TabPanel>
                            <TabPanel>
                                <EditSpecs specs={edited.product_specifications.product_specification}/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                <Flex gap="20px">
                    <Button size="md" colorScheme="teal">Save Changes</Button>
                    <IconButton colorScheme="teal" aria-label='reset' size='md' icon={<GrPowerReset/>}/>
                </Flex>
            </Flex>
        }
    </Box>
  )
}

export default ProductPage