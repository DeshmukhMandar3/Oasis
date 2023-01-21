import React from 'react'
import { ProductType } from '../../GlobalTypes/ProductType'
import { Stack, SimpleGrid, Flex, Image, Text, IconButton, CloseButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input, VStack} from '@chakra-ui/react'
import { BiAddToQueue } from 'react-icons/bi'
import { useAppDispatch } from '../../Redux/app.hooks'
import { STATE_ACTIONS } from '../../Redux/product/product.actions'
import { getImageURL } from '../../Redux/product/product.api'
import useAPI from '../../Hooks/useAPI'
import Loader from '../Loader'

const DEFAULT_IMG = `https://t3.ftcdn.net/jpg/02/68/55/60/240_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg`

const EditImages = ({data}:{data:ProductType}) => {
    const dispatch = useAppDispatch()
    const {loading, error, data:url, getData} = useAPI(getImageURL)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const imgFile = React.useRef(null)
    const [URL, setURL] = React.useState<string>(DEFAULT_IMG)
    const handleRemove = (i:number) => {
        data.image.splice(i, 1)
        dispatch(STATE_ACTIONS.updateEDIT({image:data.image}))
    }
    const handlePreviewFile = () =>{
        const ad = imgFile.current?.files[0];
        const form = new FormData();
        form.append("image", ad);
        getData(form)
    }
    const handleEnterURL = (e) => {
        setURL(e.target.value)
    }
    const onUpload = () => {
        dispatch(STATE_ACTIONS.updateEDIT({image:[...data.image, URL]}))
        onClose()
    }
    React.useEffect(()=>{
        url && setURL(url?.data?.display_url)

        return ()=>setURL(DEFAULT_IMG)
    }, [url])
  return (
    <Stack direction={{base:"column", md:"row"}} justify="center" align="center" w="100%" border="0px solid" borderColor="brand.200">
        <SimpleGrid columns={{base:2, md:4, lg:5}} w="100%" gap={4} m="0 auto" border="5px solid" borderColor="brand.200" p="20px">
            {data?.image?.map((src, i)=>
                <Flex h={{base:"150px", md:"250px"}} key={i} border="5px solid" borderColor="brand.100" bg="gray.500">
                    <Image w="100%"  objectFit="contain" src={src} alt={data.product_name}/>
                    <CloseButton onClick={()=>handleRemove(i)} position="absolute"/>
                </Flex>)}
        </SimpleGrid>
        <Flex align="center" justify="center">
            <IconButton onClick={onOpen}  colorScheme='teal' aria-label='add image' size='sm' icon={<BiAddToQueue/>}/>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Upload Image</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack spacing={5}>
                <Flex align="center" gap="10px">
                    <Input placeholder="Enter Image URL" w="360px" onChange={handleEnterURL}/>
                </Flex>
                <Flex align="center" gap="10px">
                    <Text>or</Text>
                </Flex>
                <Flex align="center" gap="10px">
                    <Input ref={imgFile} onChange={handlePreviewFile} type='file' outline="none" border="none" w="300px"/>
                </Flex>
                <Flex h={{base:"150px", md:"250px"}}  w="200px" border="5px solid" borderColor="brand.100" bg="gray.500">
                    {loading?<Loader/>:
                    <>
                        <Image w="100%"  objectFit="contain" src={URL} alt="Chosen Image"/>
                        <CloseButton onClick={()=>setURL(DEFAULT_IMG)} position="absolute" color="black"/>
                    </>}
                </Flex>
                </VStack>
            </ModalBody>

            <ModalFooter>
                <Button onClick={onUpload} size="sm">Upload</Button>
                <Button colorScheme='blue' mr={3} ml={3} onClick={onClose} size="sm">Close</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </Stack>
  )
}

export default EditImages