import React from 'react';
import Blogs from './Component/Blogs/Blogs';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default App;