// import React from 'react'

// function SearchAccom() {
//     return (
//         <div>SearchAccom</div>
//     )
// }

// export default SearchAccom


import React, { useState } from 'react';
import AccomLIST from '../../components/home-page/accommodation/AccomLIST';
import HomeNav from '../../components/home-page/main-navbar/HomeNav';


function SearchAccom() {
    const [searchResults, setSearchResults] = useState(null);
  
    return (
      <div>
        {/* ส่งฟังก์ชัน onSearch ไปยัง HomeNav */}
        {/* <HomeNav onSearch={(results) => setSearchResults(results)} /> */}
  
        {/* ส่ง searchResults ไปยัง AccomLIST */}
        <AccomLIST searchResults={searchResults} />
      </div>
    );
  }
  
  export default SearchAccom;