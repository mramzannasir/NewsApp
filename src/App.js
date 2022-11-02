import Navbar from './components/Navbar';
import React, { useState } from 'react'
import NewsApp from './components/NewsApp';
import {Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=>  {
   const pageSize = 15;
   const country='us'
   const apiKey = process.env.REACT_APP_NEWS_API    
   const [progress, setprogress] = useState(0)
        return (
            <>
            <Navbar/>
            <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
            />
            {/* <NewsApp apiKey={apiKey} setProgress={setProgress}  category={'category'}category'} pageSize={pageSize} country={country} /> */}
             <Routes>  

                    <Route path="*" element={<NewsApp apiKey={apiKey} setProgress={setprogress}  key="general" category={'General'} pageSize={pageSize} country={country} />}/>
                    <Route path="/business" element={<NewsApp apiKey={apiKey} setProgress={setprogress} key="business"  category={'Business'} pageSize={pageSize} country={country} />} />
                    <Route path="/entertainment" element={<NewsApp apiKey={apiKey} setProgress={setprogress} key="entertainment"  category={'Entertainment'} pageSize={pageSize} country={country} />} />
                    <Route path="/health" element={<NewsApp apiKey={apiKey} setProgress={setprogress} key="health"  category={'Health'} pageSize={pageSize} country={country} />} />
                    <Route path="/science" element={<NewsApp apiKey={apiKey} setProgress={setprogress} key="science"  category={'Science'} pageSize={pageSize} country={country} />}/> 
                    <Route path="/sports" element={<NewsApp apiKey={apiKey} setProgress={setprogress} key="sports"  category={'Sports'} pageSize={pageSize} country={country} />}/> 
                    <Route path="/technology" element={<NewsApp apiKey={apiKey} setProgress={setprogress} key="technology"  category={'Technology'} pageSize={pageSize} country={country} />} />
            </Routes> 

            </>
        )

}
export default App