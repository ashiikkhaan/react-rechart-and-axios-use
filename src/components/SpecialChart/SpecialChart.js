import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SpecialChart = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((res) => {
        const loadedData = res.data.data;
        const phoneData = loadedData.map((phone) => {
          const parts = phone.slug.split("-");
          const ph = {
            name: parts[0],
            value: parseInt(parts[1]),
          };
          return ph;
        });
        setPhones(phoneData);
      });
  }, []);
  return (
    <BarChart
      width={800}
      height={400}
      data={phones}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid></CartesianGrid>
      <Tooltip></Tooltip>
      <Legend></Legend>
      <XAxis dataKey="name"></XAxis>
      <YAxis></YAxis>
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default SpecialChart;
