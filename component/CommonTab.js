import React from 'react'
import Color from '../styles/colors'

const CommonTabs = (props) => {
  const { selectedTab, changeSelectedTab, tabs } = props;

  return <div style={{padding: 20,borderRadius: 10,backgroundColor: "black"}}>
            <div>
            <div style={{display: "block"}}>
                {
                    tabs.map((item) => {
                    return (
                            <span onClick={() => changeSelectedTab(item.value)} style={{cursor: "pointer",padding: 5,backgroundColor: selectedTab === item.value ? "#0070f3" : "white",marginRight: 10,display: "inline-block",borderRadius: 20,border: "1px solid #0070f3",paddingLeft: 20,paddingRight: 20}}>
                                <span style={{color: selectedTab === item.value ? "white" : "#0070f3" }}>{item.label}</span>
                            </span>
                        )
                    })
                }
            </div>
            <div style={{backgroundColor: "white",marginTop: 7,padding: 10,borderTopRightRadius: 10,borderBottomLeftRadius: 10,borderBottomRightRadius: 10}}>
                { tabs.map((item) => item.value === selectedTab && item.component )}
            </div>
        </div>
    </div>
}

export default CommonTabs;