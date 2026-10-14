import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import AuthRoute from './authRoute';

const Login = lazy(() => import('./components/Login'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const AddUser = lazy(() => import('./components/AddUser'))
const EditUser = lazy(() => import('./components/EditUser'))

function App() {
  return (
    <Suspense fallback={<div class="flex items-center justify-center min-h-[200px]">
      <div class="relative w-12 h-12">
        <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 border-r-purple-500 border-b-cyan-400 border-l-emerald-400 animate-spin"></div>
        <div class="absolute inset-3 rounded-full bg-indigo-100 animate-pulse"></div>
      </div>
    </div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AuthRoute> <Dashboard /> </AuthRoute>} />
        <Route path="/AddUser" element={<AuthRoute> <AddUser /> </AuthRoute>} />
        <Route path="/users-edit/:id" element={<AuthRoute> <EditUser /> </AuthRoute>} />
      </Routes>
    </Suspense>
  );
}

export default App;
