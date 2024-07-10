import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { loginUser } from '../store/thunks/authThunks'


const LoginForm = () => {

    const[email, setEmail] = useState<string>('')
    const[password, setPassword] = useState<string>('')

    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.auth)

    const loginSubmitForm = (e: React.FormEvent) => {

      e.preventDefault()

      dispatch(loginUser({email, password}))
    }

  return (
    <form onSubmit={loginSubmitForm} className='w-full flex flex-col'>
        <div>
            <label htmlFor="email" className='block mb-1 text-md font-semibold'>Email</label>
            <input id='email' type="email" className='w-full rounded-sm p-1 text-gray-700 mb-4 text-md' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="password" className='block mb-1 text-md font-semibold'>Contraseña</label>
            <input id='password' type="password" className='w-full rounded-sm p-1 text-gray-700 mb-4 text-md' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button
          type='submit'
          className={`border-2 self-center rounded-sm py-1 px-3 text-md font-semibold mt-4 ${auth.status === 'loading' && 'opacity-50'}`}
          >
            Iniciar Sesión
        </button>
        {
          auth.status === 'failed' && <h5 className="bg-red-300 text-red-800 text-md font-semibold py-1 mt-6 text-center">{auth.error?.message}</h5>
        }
    </form>
  )
}

export default LoginForm