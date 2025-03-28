// Inicialización de gráficos
const initCharts = () => {
    // Gráfico principal
    const heroCtx = document.getElementById('heroChart').getContext('2d');
    const heroChart = new Chart(heroCtx, {
        type: 'line',
        data: {
            labels: Array(24).fill().map((_, i) => `${i}:00`),
            datasets: [{
                label: 'BTC/USD',
                data: Array(24).fill().map(() => Math.random() * 1000 + 30000),
                borderColor: '#00ff88',
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(0, 255, 136, 0.1)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // Actualizar datos cada 30 segundos
    setInterval(() => {
        fetch('/api/prices')
            .then(res => res.json())
            .then(data => {
                // Actualizar gráficos con nuevos datos
                console.log('Datos actualizados:', data);
            });
    }, 30000);
};

// Sistema de alertas
const setupAlerts = () => {
    const alertForm = document.getElementById('alertForm');
    if (alertForm) {
        alertForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const crypto = document.getElementById('alertCrypto').value;
            const condition = document.getElementById('alertCondition').value;
            const value = document.getElementById('alertValue').value;
            
            // Registrar alerta (en un sistema real, esto iría al backend)
            console.log(`Alerta creada: ${crypto} ${condition} ${value}`);
            alert(`Alerta configurada para ${crypto} cuando el precio sea ${condition} $${value}`);
        });
    }
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    setupAlerts();
    
    // Efecto máquina de escribir para el hero
    const heroText = "Domina el mercado crypto";
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < heroText.length) {
            document.querySelector('.hero-section h1').textContent = heroText.substring(0, i+1);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);
});
