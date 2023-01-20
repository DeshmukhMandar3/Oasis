import React from 'react'
import { Editable, useEditableControls, ButtonGroup, Flex, IconButton, EditableTextarea, EditablePreview, Input, EditableInput, ChakraProps, Textarea } from '@chakra-ui/react'
import { BiEdit } from 'react-icons/bi'
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'
import { useAppDispatch } from '../../Redux/app.hooks'
import { STATE_ACTIONS } from '../../Redux/product/product.actions'
import { SortKeys } from './SortFields'

interface propType extends ChakraProps {
    field: string,
    value: string | number,
    multiline?: boolean
}

function CustomEditable({field, value, multiline=false, ...rest}:propType) {
    const [val, setVal] = React.useState<string>(String(value))
    const dispatch = useAppDispatch()
    const changeField = () => {
      let newVal:string|number = val
      if (field.includes('spec')) dispatch(STATE_ACTIONS.updateSPEC(field, newVal, +field[field.length-1]))
      if (field===SortKeys.price||field===SortKeys.mrp||field===SortKeys.discount) newVal=Number(val)
      dispatch(STATE_ACTIONS.updateEDIT({[field]:newVal}))
    }
    React.useEffect(()=>{
      console.log(val)
    })
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  
      return isEditing ? (
        <ButtonGroup justifyContent='center' size='xs'>
          <IconButton aria-label='check' icon={<AiOutlineCheck />} {...getSubmitButtonProps()} />
          <IconButton aria-label='cancel' icon={<AiOutlineClose />} {...getCancelButtonProps()} />
        </ButtonGroup>
      ) : (
        <Flex justifyContent='center'>
          <IconButton aria-label='edit' size='xs' icon={<BiEdit />} {...getEditButtonProps()} />
        </Flex>
      )
    }
  
    return (
      <Editable
        defaultValue={String(value)}
        fontSize='sm'
        isPreviewFocusable={false}
        onSubmit={changeField}
        {...rest}
      >
        <Flex gap="20px" align="center">
            <EditablePreview />
              {multiline?<Textarea value={val}  resize="vertical" as={EditableTextarea}/>:<Input value={val} onChange={e=>setVal(e.target.value)} as={EditableInput} />}
            <EditableControls />
        </Flex>
      </Editable>
    )
  }

export default React.memo(CustomEditable)