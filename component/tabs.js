import React from 'react'

const Tabs = (props) => {
  const { selectedTab, changeSelectedTab, tabs } = props;
  return <div className={'tabHead'}>
    {tabs.map(t => <button key={t.value} className={selectedTab === t.value ? 'active' : ''}
      onClick={() => { changeSelectedTab(t.value) }}>
      {t.label}
    </button>)}
  </div>
}

export default Tabs;