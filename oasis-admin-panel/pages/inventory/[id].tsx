import React from 'react'
import Loader from '../../Components/Loader'
import ErrorIndicator from '../../Components/Error'
import EditDetails from '../../Components/Inventory/EditDetails'
import EditSpecs from '../../Components/Inventory/EditSpecs'
import EditImages from '../../Components/Inventory/EditImages'

import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../Redux/app.hooks'
import { PRODUCT_ACTIONS, STATE_ACTIONS } from '../../Redux/product/product.actions'
import {Box, Flex, IconButton, Image, Input, SimpleGrid, Stack, Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue,Button} from '@chakra-ui/react'
import { GrPowerReset } from 'react-icons/gr'
import CustomEditable from '../../Components/Inventory/CustomEditable'

const ProductPage = () => {
    const router = useRouter()
    const { loading, error, edited, id } = useAppSelector(store=>store.Product)
    const dispatch = useAppDispatch()
    const teal = useColorModeValue('brand.200', 'brand.100')
    const handleSave = () => {
        dispatch(PRODUCT_ACTIONS.updateData(edited, id))
    }
    const handleReset = () => {
        dispatch(STATE_ACTIONS.resetEdit())
    }
    React.useEffect(() => {
        if (router && router.query) {
         dispatch(PRODUCT_ACTIONS.getData(router.query.id))
         dispatch(STATE_ACTIONS.setID(router.query.id))
        }
       }, [router]);
    
  return (
    <Box w="100%">
        {
            loading? <Loader/>:
            // error? <ErrorIndicator/>:
            edited && 
            <Flex direction="column" gap="30px">
                <EditImages data={edited}/>
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
                                <EditSpecs specs={edited?.product_specifications?.product_specification}/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                <Flex gap="20px">
                    <Button onClick={handleSave} isLoading={loading} size="md" colorScheme="teal">Save Changes</Button>
                    <IconButton onClick={handleReset} colorScheme="teal" aria-label='reset' size='md' icon={<GrPowerReset/>}/>
                </Flex>
            </Flex>
        }
    </Box>
  )
}

export default ProductPage