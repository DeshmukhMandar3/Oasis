import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    UseDisclosureProps,
    Button,
    useColorModeValue,
    Flex,
    TabPanels,
    TabPanel,
    Tabs,
    TabList,
    Tab

  } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../../Redux/app.hooks'
import { PRODUCT_ACTIONS, STATE_ACTIONS } from '../../../Redux/product/product.actions'
import EditImages from '../EditImages'
import EditDetails from '../EditDetails'
import EditSpecs from '../EditSpecs'
import CustomEditable from '../CustomEditable'
interface PropsType extends UseDisclosureProps {
    btnRef:React.RefObject<HTMLButtonElement>
}

const ProductModal = ({onClose, isOpen, btnRef}:PropsType) => {
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
        dispatch(STATE_ACTIONS.addProdInit())
       }, []);
  return (
    <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior='outside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          {edited && <ModalBody>
            <Flex direction="column">
                <EditImages data={edited}/>
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
            </Flex>
          </ModalBody>}
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default ProductModal