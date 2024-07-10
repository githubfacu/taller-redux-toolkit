import { useDispatch, useSelector } from "react-redux"
import LoginForm from "./components/LoginForm"
import { AppDispatch, RootState } from "./store/store"
import { logout } from './store/auth/authSlice'

function App() {

  const dispatch = useDispatch<AppDispatch>()
  const auth = useSelector((state: RootState) => state.auth)

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <h2 className="self-start">Taller Redux-toolkit</h2>

      <div className="w-96 flex flex-col items-center justify-center">
        
      {
        !auth.user?.email ?
        <>
          <h1 className="text-3xl mb-6">Iniciar Sesión</h1>
          <LoginForm />
        </> :
        <>
          <h1>Bienvenido</h1>
          <h3 onClick={() => dispatch(logout())} className="cursor-pointer">Cerrar Sesión</h3>
        </>
      }
      </div>

    </div>
  )
}

export default App