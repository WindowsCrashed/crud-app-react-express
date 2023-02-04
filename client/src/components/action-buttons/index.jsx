import React from 'react'
import Button from '../button'
import './style.css'
import { Edit, Trash2 } from 'react-feather'

function ActionButtons() {
    return ( 
        <div className='action-btns'>
            <Button classes='btn-warning'>
                <Edit size={21}/>
            </Button>
            <Button classes='btn-danger'>
                <Trash2 size={21}/>
            </Button>
        </div>
    )
}

export default ActionButtons