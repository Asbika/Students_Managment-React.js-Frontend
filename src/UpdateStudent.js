import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id,{name,email})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }
  return (
    <div>
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' 
                        onChange={e => setName(e.target.value)}
                        />
                        <div className='mb-2'>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Enter Email' className='form-control' 
                            onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default UpdateStudent