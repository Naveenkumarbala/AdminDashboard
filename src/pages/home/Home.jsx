import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
const Home = () => {
  return (
      <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        {/* Container */}
        {/* Props */}
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months(Revenue)" aspect={2/1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home


//Description:
//className home acts as a parent
//sidebar and homeContainer are its child components
//to make sidebar and homeContainer side by side we use home which is parent as flexbox
//container is six times greater than the sidebar.