// SimpleLineChart.js
import React from 'react';
import { BarChart, XAxis, Legend, YAxis, Bar, Tooltip, LineChart, Line, Pie, PieChart, RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
const data = [
  { year: "2020", india: "11000", chaina: "15000" },
  { year: "2021", india: "13000", chaina: "17000" },
  { year: "2022", india: "15000", chaina: "19000" },
  { year: "2023", india: "17000", chaina: "21000" },
  { year: "2024", india: "28000", chaina: "23000" },
]
const lchartdata = [
  { name: "MongoDB", studant: "15", fees: "1500" },
  { name: "Javascript", studant: "20", fees: "1200" },
  { name: "HTML", studant: "18", fees: "2000" },
  { name: "C++", studant: "12", fees: "2500" },
  { name: "JAVA", studant: "17", fees: "3000" },
  { name: "PHP", studant: "13", fees: "1000" },
  { name: "React", studant: "20", fees: "1500" },
]
const Piechart = [
  { name: 'Geeksforgeeks', students: 400 },
  { name: 'Technical scripter', students: 700, fill: "yellow" },
  { name: 'Geek-i-knack', students: 200, fill: "red" },
  { name: 'Geek-o-mania', students: 1000, fill: "purple" }
];
const Radialbar = [
  { name: 'A', x: 10, fill: "green" },
  { name: 'B', x: 20, fill: "yellow" },
  { name: 'C', x: 30, fill: "aqua" },
  { name: 'D', x: 40, fill: "blue" },
  { name: 'E', x: 50, fill: "orange" },
  { name: 'F', x: 60, fill: "red" },
  { name: 'G', x: 70, fill: "black" },
  { name: 'H', x: 80, fill: "purple" },
  { name: 'I', x: 90, fill: "gray" },
];

const SimpleChart = () => {
  return (
    <div >

      <div className='barchart'>
        <div className='row '>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-body'>
              <h1 className='text-center title'><b>Population Chart</b></h1>
              <ResponsiveContainer width="100%" height={400}>
            <BarChart className='img-thumbnail'  width={500} height={400} data={data}>
              <XAxis dataKey="year" interval={"preserveStartEnd"} />
              <Tooltip className="img-thumbnail" />
              <YAxis />
              <Bar dataKey="india" stackId="a" fill="darkblue" />
              <Bar dataKey="chaina" stackId="b" fill="#8884d8" />

              <Legend verticalAlign="top" height={36} />
            </BarChart>
            </ResponsiveContainer>
              </div>
            </div>
            <div className='card mt-3'>
              <div className='card-body'>
              <h1 className='text-center '><b>Line Chart</b></h1>
              <ResponsiveContainer width="100%" height={400}>
            <LineChart className='img-thumbnail' width={500} height={400} data={lchartdata}>
              <XAxis dataKey="name" interval={"preserveStartEnd"} />
              <Tooltip  />
              <YAxis />
              <Line type="monotone" dataKey="fees" stroke="#8884d8" />
              <Line type="monotone" dataKey="studant" stroke="#82ca9d" activeDot={{ r: 8 }} />

              <Legend verticalAlign="top" height={36} />
            </LineChart>
            </ResponsiveContainer>
              </div>
            </div>
           
           
          </div>
          <div className='col-md-6'>
          <div className='card '>
              <div className='card-body'>
              <h1 className='text-center '><b>Pie Chart</b></h1>
              <ResponsiveContainer width="100%" height={400}>
            <PieChart className='img-thumbnail' width={500} height={400}>
              <Pie data={Piechart} dataKey="students" fill="darkblue" />
              <Legend verticalAlign="top" height={36} />
              <Tooltip  /> 
            </PieChart>
            </ResponsiveContainer>
              </div>
            </div>
            <div className='card mt-3'>
              <div className='card-body'>
              <h1 className='text-center '><b>Redial Chart</b></h1>
              <ResponsiveContainer width="100%" height={400}>
            <RadialBarChart className='img-thumbnail' width={500}
              height={400} data={Radialbar}>
              <RadialBar minAngle={30} dataKey="x" clockWise />
              <Pie data={Piechart} dataKey="students" fill="darkblue" />
              <Legend verticalAlign="top" height={36} />
              <Tooltip />
            </RadialBarChart>
            </ResponsiveContainer>
              </div>
            </div>
           
          </div>
        </div>
      </div>




    </div>
  );
};

export default SimpleChart;
