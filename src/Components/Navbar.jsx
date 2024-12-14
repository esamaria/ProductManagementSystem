import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='main'style={{display:'flex' ,flexDirection:'column',justifyContent:'space-evenly',height:'500px'}}>
        <div className='details' >
             <h1 style={{marginLeft:'10px',color:'#2B4B67'}}>ESA MARIA SHYJU</h1>
            <h3 style={{marginLeft:'10px',color:'#2B4B67'}}>esamariashyju@gmail.com</h3>
        </div>
        <div className='btns'style={{ width:'100px',display:'flex' ,flexDirection:'column',justifyContent:'space-evenly',height:'200px',marginLeft:'90px',alignItems: 'center'}}>
            <Link to="/" style={{borderRadius:'30px',color:'#2B4B67 ',backgroundColor:'#7389AE',height:'50px', lineHeight: '50px', 
            textAlign: 'center', textDecoration: 'none', fontWeight: 'bold',width:'200px' }}>HOME</Link><br/>
            <Link to='/addproduct' style={{borderRadius:'30px',color:'#2B4B67 ',backgroundColor:'#7389AE',height:'50px',lineHeight: '50px', 
            textAlign: 'center', textDecoration: 'none', fontWeight: 'bold',width:'200px',marginLeft:'10px'}}>ADD PRODUCT</Link><br/>
            
        </div>
    </div>
  )
}

export default Navbar