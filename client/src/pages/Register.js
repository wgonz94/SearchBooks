import React from 'react'
import './style.css'

function Register() {



return (
    <div>
        <br/>
        <h1 className="text-success font-weight-bold">Welcome to the BookStore!</h1>
        {/* <h2>Let's Sign up Here!</h2> */}
        <h1 className='text-dark font-weight-bold'>
                Account <span className='text-warning'>Registration</span>
            </h1>
            <form>
                <div className='form-group font-weight-bold'>
                    <input
                        className='form-control'
                        type='text'
                        name='name'
                        placeholder='firstname'
                        value={''}
                        // onChange={onChange}
                    />
                    
                </div>
                <div className='form-group font-weight-bold'>
                    <input
                        className='form-control'
                        type='text'
                        name='name'
                        placeholder='lastname'
                        value={''}
                        // onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        name='email'
                        placeholder='email@email.com'
                        value={''}
                        // onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        placeholder='password'
                        value={''}
                        // onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        name='password2'
                        placeholder='password again'
                        value={''}
                        // onChange={onChange}
                    />
                </div>

                <input
                    type='submit'
                    value='Register'
                    className='btn btn-primary font-weight-bold'
                />
            </form>
    </div> 
)
}

export default Register;