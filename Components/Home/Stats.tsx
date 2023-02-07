import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Flex
  } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../Redux/app.hooks'
import { PRODUCTS_ACTIONS } from '../../Redux/products/products.actions'
import { USERS_ACTIONS } from '../../Redux/users/users.actions'

const Stats = () => {
  const {count:productsCount, params:productsParams} = useAppSelector(store=>store.Products)
  const {count:usersCount, params:usersParams} = useAppSelector(store=>store.Users)
  const dispatch = useAppDispatch()
  React.useEffect(()=>{
    dispatch(PRODUCTS_ACTIONS.getData(productsParams))
    dispatch(USERS_ACTIONS.getData(usersParams))
  }, [])
  return (
    <StatGroup gap="50px">
      <Flex gap="50px" p="50px">
        <Stat w="200px">
            <StatLabel>Users</StatLabel>
            <StatNumber>{usersCount}</StatNumber>
            <StatHelpText>
            <StatArrow type='increase' />
            23.36%
            </StatHelpText>
        </Stat>

        <Stat w="200px">
            <StatLabel>Orders Placed</StatLabel>
            <StatNumber>20</StatNumber>
            <StatHelpText>
            <StatArrow type='decrease' />
            9.05%
            </StatHelpText>
        </Stat>

        <Stat w="200px">
            <StatLabel>Products</StatLabel>
            <StatNumber>{productsCount}</StatNumber>
        </Stat>
      </Flex>
    </StatGroup>
  )
}

export default Stats