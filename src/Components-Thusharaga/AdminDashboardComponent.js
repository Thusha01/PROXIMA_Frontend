import React, { useEffect, useState } from 'react';
import RateUpdatePage from '../Pages-Chamara/RateUpdatePage';
import './styles/AdminDashboardStyles.css';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';

function AdminDashboardComponent({ showRateUpdate }) {
  const [monthlyIncome, setIncome] = useState('');
  const [monthlyExpense, setExpense] = useState('');
  const [totalAdmins, setTotalAdmins] = useState(0);
  const [totalManagers, setTotalManagers] = useState(0);
  const [totalDevelopers, setTotalDevelopers] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get(`https://localhost:44339/api/AdminDashboard`);
      console.log(response.data);
      setTotalAdmins(response.data.totalAdmins);
      setTotalDevelopers(response.data.totalDevelopers);
      setTotalManagers(response.data.totalManagers);
      setIncome(response.data.totalIncome);
      setExpense(response.data.totalExpense);
      setTotalProjects(response.data.totalProjects);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  return (
    <div className="maincontent">
      <div className="header">
        <div className="welcome">Hi! Welcome Back</div>
        <button className="developerRateButton">
          {showRateUpdate && (
            <div >
              <RateUpdatePage />
            </div>
          )}
        </button>
      </div>
      
      <div className="body">
        <div className="description">
        <h3> <b>
            Our company thrives with a robust team. Here's a quick overview of our dynamic workforce and the projects we handle:
            </b>
        </h3>
          
        </div>
        <div className="column2">
          <div className="box">
            <h3>Admins</h3>
            <p>{totalAdmins}</p>
          </div>
          <div className="box">
            <h3>Project Managers</h3>
            <p>{totalManagers}</p>
          </div>
          <div className="box">
            <h3>Developers</h3>
            <p>{totalDevelopers}</p>
          </div>
          <div className="box">
            <h3> Projects</h3>
            <p>{totalProjects}</p>
          </div>
        </div>
        <div className='description1' style={{
              fontSize: '12px', 
              color: '#6c757d', 
              margin: '10px 0', 
              lineHeight: '1.5',
              textAlign: 'center'
           }}>
        <p>
            <strong>Admins:</strong> The backbone of our operations, ensuring everything runs smoothly.
          </p>
          <p>
            <strong>Project Managers:</strong> The strategic minds driving our projects to success.
          </p>
          <p>
            <strong>Developers:</strong> The creative force behind our innovative solutions.
          </p>
          <p>
            <strong>Projects:</strong> The diverse array of initiatives we are currently managing.
          </p>
        </div>
        <br/>
        <div className="description" >
          <h3> <b>This bar chart illustrates the current monthly income and expense:</b></h3>
          <p style={{
              fontSize: '12px', 
              color: '#6c757d', 
              margin: '10px 0', 
              lineHeight: '1.5'
           }}>
               Stay informed about the financial health of our company with a clear view of our monthly revenue and expenditures.
          </p>
        </div>

        <div className="column3">
          <BarChart
            xAxis={[{ scaleType: 'band', data: ['Monthly Income', 'Monthly Expense'] }]}
            series={[{ data: [monthlyIncome, monthlyExpense] }]}
            width={400}
            height={300}
            className="chartContainer"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardComponent;
