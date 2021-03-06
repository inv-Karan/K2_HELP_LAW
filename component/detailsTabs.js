import React from 'react'
import Color from '../styles/colors'

const DetailsTabs = (props) => {
  const { selectedTab, changeSelectedTab, tabs } = props;

  return <div style={{ padding: 1, borderRadius: 10, backgroundColor: "#f5f5f5", width:'fit-content' }}>
    <div>
      <div style={{ display: "block" }}>
        {
          tabs.map((item) => {
            return (
              <span onClick={() => changeSelectedTab(item.value)} 
              style={{ 
                cursor: "pointer", padding: 5, 
                backgroundColor: selectedTab === item.value ? "#0070f3" : "#f5f5f5", 
                display: "inline-block", borderRadius: 5, 
                paddingLeft: 20, paddingRight: 20 }}>
                <span style={{ color: selectedTab === item.value ? "#f5f5f5" : "#0070f3" }}>{item.label}</span>
              </span>
            )
          })
        }
      </div>
      <div>
        {tabs.map((item) => item.value === selectedTab && item.component)}
      </div>
    </div>
  </div>
}

export default DetailsTabs;