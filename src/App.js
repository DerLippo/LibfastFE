import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Style
import { GlobalStyle } from './GlobalStyle';
// API
import API from './API';
//Hooks
import { useSystemFetch } from './hooks/useSystemFetch';
//Components
import Home from './components/Home';
import Post from './components/Post';
import PostCreate from './components/PostCreate';
import Search from './components/Search';
import NotFound from './components/NotFound';
import Maintenance from './components/Maintenance';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import AccountRecovery from './components/AccountRecovery';
import Legal from './components/Legal';
import Profile from './components/Profile';
import ScrollToTop from './components/ScrollToTop'
import Settings from './components/Settings';
// Context
import UserProvider from './context';


const App = () => {
  
  const {
    state,
    loading, 
    error,
  } = useSystemFetch();

  if(loading) return ''
  if(error) return <div>Something went wrong...</div>

  return (
    <Router>
      <UserProvider>
        <ScrollToTop>
          {
            (state.maintenance == 1) ?
              <Routes>
                <Route path='*' element={<Maintenance />} />
              </Routes>
            :null
          }
          {
            (state.maintenance == 0) ?
              <Routes>
                <Route path='/' element={<Home />} />
                
                <Route path='/logout' element={<Logout />} />
                <Route path='/login' element={<Login />} />
                <Route path='/login/:code' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='/account-recovery' element={<AccountRecovery />} />
                <Route path='/account-recovery/:code' element={<AccountRecovery />} />

                <Route path='/legal/:legalName' element={<Legal />} />

                <Route path='/p/:postUrl' element={<Post />} />

                <Route path='/create' element={<PostCreate />} />
                <Route path='/search' element={<Search />} />

                <Route path='/@:userName' element={<Profile />} />
                <Route path='/settings' element={<Settings />} />

                <Route path='/!:hashtag' element={<Home />} />
                <Route path='/search/:search' element={<Home />} />
                
                <Route path='*' element={<NotFound />} />
              </Routes>
            :null
          }
        </ScrollToTop>
        <GlobalStyle />
      </UserProvider>
    </Router>
  )
};

export default App;