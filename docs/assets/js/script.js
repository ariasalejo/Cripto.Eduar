// Espera a que el DOM se cargue
document.addEventListener("DOMContentLoaded", function () {
  // Datos de ejemplo para el gráfico
  const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
  const values = [60000, 70000, 75000, 80000, 85000, 90000, 100000];

  const ctx = document.getElementById('cryptoChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Precio de Bitcoin (USD)',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: false }
      }
    }
  });
});
