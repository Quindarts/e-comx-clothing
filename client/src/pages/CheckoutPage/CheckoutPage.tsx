import React from 'react'
import CustomOrderInformation from './CustomOderInformation/CustomOrderInformation'
import OrderSummary from './OrderSummary'

function CheckoutPage() {
  return (
    <div className='checkout_page flex flex-wrap gap-[6rem]'>
      <CustomOrderInformation/>
      <OrderSummary/>
    </div>
  )
}

export default CheckoutPage