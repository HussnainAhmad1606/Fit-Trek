import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Cleanup previous chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Aggregate workout durations by date
      const aggregatedData = {};
      data.forEach(workout => {
        const date = new Date(workout.date_completed).toLocaleDateString();
        if (aggregatedData[date]) {
          aggregatedData[date] += workout.duration_minutes;
        } else {
          aggregatedData[date] = workout.duration_minutes;
        }
      });

      // Prepare labels (dates) and values (total durations)
      const labels = Object.keys(aggregatedData);
      const values = Object.values(aggregatedData);

      // Create the chart
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Total Duration (minutes)',
              data: values,
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Total Duration (minutes)',
              },
            },
          },
        },
      });
    }

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default Graph;
