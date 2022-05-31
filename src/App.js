import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  const updateProgress = (progress) => {
    setProgress(progress)
  }
    return (
      <>
        <BrowserRouter>
        <div>
          <LoadingBar
          color='#228B22'
          progress={progress}
          />
          <NavBar/>
        </div>
        <div>
            <Routes>
              <Route 
                path='/' 
                element={<News apiKey={apiKey} setProgress={updateProgress} key="general" pageSize={12} country="in" category="general"/>}
              />
              <Route 
                path='business' 
                element={<News apiKey={apiKey} setProgress={updateProgress} key="business" pageSize={12} country="in" category="business"/>}
              />
              <Route 
                path='entertainment' 
                element={<News apiKey={apiKey} setProgress={updateProgress} key="entertainment" pageSize={12} country="in" category="entertainment"/>}
              />
              <Route 
                path='health' 
                element={<News apiKey={apiKey} setProgress={updateProgress} key="health" pageSize={12} country="in" category="health"/>}
              />
              <Route 
                path='science' 
                element={<News apiKey={apiKey} setProgress={updateProgress} key="science" pageSize={12} country="in" category="science"/>}
              />
              <Route 
                path='sports' 
                element={<News apiKey={apiKey} setProgress={updateProgress} key="sports" pageSize={12} country="in" category="sports"/>}
              />
              <Route 
                path='technology' 
                element={<News apiKey={apiKey} setProgress={updateProgress} key="technology" pageSize={12} country="in" category="technology"/>}
              />
            </Routes>
        </div>
        </BrowserRouter>
      </>
    )
}

export default App
