import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'> 
        <h1 className='primary-heading'>Have Question In Mind?</h1>
        <h1 className='primary-heading'>Let Us Help You</h1>
        <form className='contact-form-container'>
            <input type='email' placeholder='yourmail@gmail.com' name='email' />
            {/* <input type='number' placeholder='phone number' /> */}
            <button type='submit' className='secondary-button'>Submit</button>
        </form>
    </div>
  )
}

export default Contact