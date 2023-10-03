import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
// import Statistic from '../Statistic/Statistic';

const Statistics = () => {
    const statistic = useLoaderData();
    // const statistics = statistic.data
    const data = statistic.data;
    // console.log(data)
    return (
        <div className=''>
            <LineChart className='mx-auto my-20' width={400} height={350} data={data} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}>
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip />
            </LineChart>

        </div>
    );
};

export default Statistics;