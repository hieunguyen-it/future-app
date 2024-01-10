import AuthSignIn from '@features/auth/sign-in'
import Home from '@features/home'
import RequireAuth from '@features/require-auth'
import { Routes, Route } from 'react-router-dom'
function App() {
    return (
        <Routes>
            <Route path='sign-in' element={<AuthSignIn />} />
            <Route
                path='/'
                element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                }
            />
        </Routes>
    )
}

export default App
