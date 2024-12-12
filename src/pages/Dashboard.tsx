import  BasicPie  from '../components/BasicPie';
import Card from '../components/Card';
import MonthlyBarChart from '../components/MonthlyBarChart';
import MonthlyLineChart from '../components/MonthlyLineChart';
import TopCustomers from '../components/TopCustomers';

const Dashboard = () => {
    return (
      <div className=' gap-4 ml-30 p-2 lg:ml-0'>
        {/* <ul>
          {userDashboardData.map((item) => (
            <li key={item.id}>{item.username}</li>
          ))} */}
          <div className='flex'>
            <Card heading={"Total Users"} value={1200}/>
            <Card heading={"Total Revenue"} value={5000}/>
            <Card heading={"Total Orders"} value={100}/>
            <Card heading={"Total Returns"} value={10}/>
          </div>
          <MonthlyBarChart />
          <BasicPie />
          {/* <MonthlyLineChart />
          <TopCustomers /> */}
        {/* </ul> */}
      </div>
    );
  };
  

export default Dashboard
