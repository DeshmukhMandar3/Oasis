import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'

const Stats = () => {
  return (
    <StatGroup gap="50px">
        <Stat>
            <StatLabel>Users</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
            <StatArrow type='increase' />
            23.36%
            </StatHelpText>
        </Stat>

        <Stat>
            <StatLabel>Orders Placed</StatLabel>
            <StatNumber>2,00,000</StatNumber>
            <StatHelpText>
            <StatArrow type='decrease' />
            9.05%
            </StatHelpText>
        </Stat>
    </StatGroup>
  )
}

export default Stats