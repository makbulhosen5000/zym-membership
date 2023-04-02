import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Dashboard = () => {
  const students = [
    {
      id: 1,
      name: "John",
      math: 80,
      physics: 75,
      chemistry: 90,
    },
    {
      id: 2,
      name: "Emma",
      math: 85,
      physics: 90,
      chemistry: 80,
    },
    {
      id: 3,
      name: "Bob",
      math: 90,
      physics: 80,
      chemistry: 85,
    },
    {
      id: 4,
      name: "Alice",
      math: 75,
      physics: 85,
      chemistry: 90,
    },
    {
      id: 5,
      name: "Sarah",
      math: 80,
      physics: 90,
      chemistry: 85,
    },
    {
      id: 6,
      name: "Mike",
      math: 85,
      physics: 75,
      chemistry: 80,
    },
    {
      id: 7,
      name: "Kate",
      math: 90,
      physics: 85,
      chemistry: 75,
    },
    {
      id: 8,
      name: "David",
      math: 80,
      physics: 90,
      chemistry: 85,
    },
    {
      id: 9,
      name: "Amy",
      math: 75,
      physics: 80,
      chemistry: 90,
    },
    {
      id: 10,
      name: "Oliver",
      math: 90,
      physics: 85,
      chemistry: 80,
    },
    {
      id: 11,
      name: "Lucy",
      math: 85,
      physics: 90,
      chemistry: 75,
    },
    {
      id: 12,
      name: "Jack",
      math: 80,
      physics: 85,
      chemistry: 90,
    },
  ];
  return (
    <div className="">
      <LineChart width={1050} height={300} data={students}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />

        <Line type="monotone" dataKey="math" stroke="#8884d8" />
        <Line type="monotone" dataKey="chemistry" stroke="#8884d8" />
        <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Dashboard;
