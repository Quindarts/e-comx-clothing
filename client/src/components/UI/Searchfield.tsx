import { Icon } from '@iconify/react'
import React from 'react'
import { ICON_LIBARY } from 'utils/constants'
import Button from './Button'

function Searchfield() {
  return (
    <div className='search_field flex items-center justify-between gap-5'>
      <button className='search_field--btn_search'>
        <Icon width={24} icon={ICON_LIBARY.i_search}/>
      </button>
      <input type="text" placeholder='Type your keywords'/>
      <Button className='search_field--submit' variant="contain" color="black">
        <Icon width={20} icon={ICON_LIBARY.i_arrow_right}/>
      </Button>
    </div>
  )
}

export default Searchfield