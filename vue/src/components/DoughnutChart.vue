<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [40, 20, 12],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
          }
        ],
        hoverOffset: 4
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<template>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>