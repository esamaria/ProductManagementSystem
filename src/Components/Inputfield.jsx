import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import {TextField,Button} from '@mui/material'

function InputField({setInputDiv}) {
  return (
    <div>
<div style={{display: 'flex',flexDirection:'column',  gridTemplateColumns: 'repeat(1, 1fr)',
              border: '1px solid black', borderRadius:'20px',  backgroundColor: '#B5BAD0',  padding: '10px', marginBottom: '10px', width: '300px',marginLeft:'35px',marginTop:'20px'
            }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IoIosCloseCircle
                onClick={()=> setInputDiv(false)}
            />
            </div>
             
              <TextField label="Task to do"/>
              <TextField label="Task Details"/>
              <TextField label="Status"/>
              <Button variant="contained">ADD</Button>

     </div>
    </div>
  )
}

export default InputField