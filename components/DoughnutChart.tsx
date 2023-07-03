'use client';
import React, { useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Candidate } from '@/types/candidate';
import { generateColor } from '@/libs/generateColor';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Dataset {
  label: string | undefined;
  data: number[] | undefined;
}

interface ChartProps {
  labels: Candidate[] | undefined;
  title: string | undefined;
}

const DoughnutChart = ({ labels, title }: ChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  let a: any = [];

  console.log(labels);
  const data = {
    labels: labels?.map((l, key) => l.name),
    datasets: [
      {
        label: title,
        data: labels?.map((l, key) => l.votes),
        backgroundColor: generateColor(labels?.length),
        hoverOffset: 1,
      },
    ],
  };
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
