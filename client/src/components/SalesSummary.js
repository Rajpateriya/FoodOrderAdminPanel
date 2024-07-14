import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Snacks', value: 55 },
  { name: 'Drinks', value: 30 },
  { name: 'Salads', value: 15 },
];

const COLORS = ['#FFBB28', '#FF8042', '#00C49F'];

function SalesSummary() {
  return (
    <div className="bg-gray-700 p-4 rounded-lg mb-6 text-center">
      <h3 className="text-xl font-semibold mb-4">Sales</h3>
      <div className="text-3xl font-semibold mb-4">$329,345</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PieChart width={300} height={200}>
          <Pie 
            data={data} 
            cx={140} 
            cy={100} 
            innerRadius={60} 
            outerRadius={100} 
            fill="#8884d8" 
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="flex justify-center">
        <Legend 
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{ paddingTop: 20 }}
        />
      </div>
    </div>
  );
}

export default SalesSummary;
