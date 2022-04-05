import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLinChart from '../MyLinChart/MyLinChart';

const Dashboard = () => {
    return (
        <div>
            <MyLinChart></MyLinChart>
            <MyBarChart></MyBarChart>

        </div>
    );
};

export default Dashboard;