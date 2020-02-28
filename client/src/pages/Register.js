import React,{ useState, useContext} from 'react'; 
import UserContext from './../loginReducer/user/SDContext';
import './style.css'

const Register = (props) => {

//context api for user registration
const userContext = useContext(UserContext)
const {register} = userContext

const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    password2: '',
})

const {firstname, lastname, username, email, password, password2} = user;

const onChange = e =>
setUser({ ...user, [e.target.name]: e.target.value });

const onSubmit = async e =>{
    e.preventDefault();
    console.log(firstname)
    console.log(username)
    register({
            firstname, 
            lastname, 
            username, 
            email, 
            password, 
            password2    
        })

}

return (
    <div>
        <br/>
        <h1 className="text-success font-weight-bold">Welcome to the BookStore!</h1>
        {/* <h2>Let's Sign up Here!</h2> */}
        <h1 className='text-dark font-weight-bold'>
                Account <span className='text-warning'>Registration</span>
            </h1>
            <form className='registerForm' onSubmit={onSubmit}>
                <div className='form-group font-weight-bold'>
                    <input
                        className='form-control'
                        type='text'
                        name='firstname'
                        placeholder='firstname'
                        value={firstname}
                        onChange={onChange}
                    />
                    
                </div>
                <div className='form-group font-weight-bold'>
                    <input
                        className='form-control'
                        type='text'
                        name='lastname'
                        placeholder='lastname'
                        value={lastname}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group font-weight-bold'>
                    <input
                        className='form-control'
                        type='text'
                        name='username'
                        placeholder='username'
                        value={username}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        name='email'
                        placeholder='email@email.com'
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        name='password2'
                        placeholder='password again'
                        value={password2}
                        onChange={onChange}
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