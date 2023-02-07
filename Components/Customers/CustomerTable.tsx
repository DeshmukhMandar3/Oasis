import React from 'react'
import { useAppDispatch } from '../../Redux/app.hooks'
import { Table, Thead, Tbody, Tfoot, Th, Tr, IconButton, useColorModeValue } from '@chakra-ui/react'
import { GrPowerReset } from 'react-icons/gr'
import SearchFields from '../SearchFields'
import { STATE_ACTIONS } from '../../Redux/users/users.actions'
import CustomerRow from './CustomerRow'
import { ParamsPropsType, UsersType } from '../../Redux/users/users.reducer'
interface PropsType {
    data: UsersType[],
    count: number,
    params: ParamsPropsType
}

const CustomerTable = ({data, count, params}:PropsType) => {
    const dispatch = useAppDispatch()
    const reset = () => {
        dispatch(STATE_ACTIONS.resetParams())
    }
    const handleSearchEmail = (email:string) => {
        dispatch(STATE_ACTIONS.updateParams({email, page:1}))
    }
    const handleSearchID = (id:number) => {
        dispatch(STATE_ACTIONS.updateParams({id, page:1}))
    }
  return (
    <Table size="sm">
          <Thead>
            <Tr>
              <Th>
                <SearchFields field='id' onSearch={(n) => handleSearchID(Number(n))} onClose={reset}/> 
              </Th>
              <Th>
                <SearchFields field='email' onSearch={handleSearchEmail} onClose={reset}/> 
              </Th>
              <Th>
                Mobile
              </Th>
              <Th/>
              <Th>
                <IconButton onClick={reset} colorScheme='teal' aria-label='reset' size='xs' icon={<GrPowerReset/>}/>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data && data.map(user=><CustomerRow data={user} key={user.id} {...user}/>)}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>{count} results, showing {params.page} out of {Math.ceil(count/params.limit)} pages.</Th>
            </Tr>
          </Tfoot>
    </Table>
  )
}

export default CustomerTable