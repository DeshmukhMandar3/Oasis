import React from 'react'
import ProductModal from './ProductModal'

import { useDisclosure, Button } from '@chakra-ui/react'
import {GrAdd} from 'react-icons/gr'

const AddProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)
  return (
    <>
      <ProductModal onClose={onClose} isOpen={isOpen} btnRef={btnRef}/>
      <Button ref={btnRef} onClick={onOpen} leftIcon={<GrAdd/>} colorScheme='teal' size='sm'>Add Product</Button>
    </>
  )
}

export default AddProduct