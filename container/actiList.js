import React from 'react';
import { useRouter } from 'next/router';
// import { actList } from "../redux/action/machineryAction"
import Data from '../utility/actListData';

function actList() {

  const router = useRouter();

  return <div>
      {Data.map(a => <li style={{
          padding:10,
          borderWidth:2, 
          backgroundColor:'aliceblue',
          margin:10,
          display: 'block'
          }}>
          {a.act}
          <li>
          <a href={a.pageLink}></a>
          </li>
          </li>)}
  </div>
};

export default actList;