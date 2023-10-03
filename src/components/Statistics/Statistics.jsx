import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart } from 'recharts';
// import Statistic from '../Statistic/Statistic';

const Statistics = () => {
    const statistic = useLoaderData();
    // const statistics = statistic.data
    const data = statistic.data[0];

    console.log(data)
    return (
        <div>

            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="name" stroke="#8884d8" />
            </LineChart>
            {/* {
                statistics.map(statistic => <Statistic
                    key={statistic.id}
                    statistic={statistic}
                ></Statistic>)
            } */}
        </div>
    );
};

export default Statistics;