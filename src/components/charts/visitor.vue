<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    mounted () {
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Visitors',
            backgroundColor: 'rgba(255, 152, 154, 0.2)',
            borderColor: 'rgba(255, 152, 154, 1)',
            pointBorderColor: '#FFFFFF',
            pointBackgroundColor: 'rgba(255, 152, 154, 1)',
            pointRadius: 5,
            pointBorderWidth: 2,
            data: [20, 20, 12, 39, 10, 40, 39, 50, 40, 20, 12, 11]
          },
          {
            label: 'Returning Visitors',
            backgroundColor: 'rgba(182, 143, 255, 0.2)',
            borderColor: 'rgba(182, 143, 255, 1)',
            pointBorderColor: '#FFFFFF',
            pointBackgroundColor: 'rgba(182, 143, 255, 1)',
            pointRadius: 5,
            pointBorderWidth: 2,
            data: [10, 30, 11, 9, 1, 20, 30, 30, 20, 50, 16, 19]
          }
        ]
      }, {
        height: 400,
        legend: {
          display: true,
          position: 'top',
          labels: {
            fontColor: '#ADADAE',
            usePointStyle: true
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      })
    }
  }
</script>