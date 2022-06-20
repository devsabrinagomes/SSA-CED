import React from "react";
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  


export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  
  const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: '2021',
        data: [82, 17, 30, 15, 50, 30, 45],
        backgroundColor: '#2DCE89',
      },
      {
        label: '2022',
        data: [40, 10, 60, 80, 20, 80, 25],
        backgroundColor: '#1188EE',
      },
    ],
  };

function Chart() {

    return (    
      <div className="container-fluid py-2">

        <div className="row mt-0">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="card z-index-2 h-100">
              <div className="card-header pb-0 pt-3 bg-transparent">
                <h6 className="text-uppercase">Aprovados por categoria</h6>
              </div>
              <div className="card-body p-3">
                <div className="chart">
                  <Bar options={options} data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}

export default Chart;

