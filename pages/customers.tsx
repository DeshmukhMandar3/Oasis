import React from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/app.hooks'
import { STATE_ACTIONS, USERS_ACTIONS } from '../Redux/users/users.actions'
import CustomerTable from '../Components/Customers/CustomerTable'
import Loader from '../Components/Loader'
import ErrorIndicator from '../Components/Error'

const Customers = () => {
  const dispatch = useAppDispatch()
  const {loading, error, data, count, params} = useAppSelector(store=>store.Users)
  React.useEffect(()=>{
    dispatch(USERS_ACTIONS.getData(params))
  }, [params])
  return (
    <>
    {
      loading? <Loader/>:
      error? <ErrorIndicator/>:
      data && <CustomerTable data={data} count={count} params={params}/>
    }
      
    </>
  )
}

export default Customers