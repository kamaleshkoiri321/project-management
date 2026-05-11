// NexaTech — Admin JS
document.addEventListener('DOMContentLoaded', () => {
    // Admin specific logic
    console.log('NexaTech Admin Portal Initialized');
});

// Function to initialize charts (to be called from admin.html with data)
function initAdminCharts(labels, counts, salaries) {
    const colors = ['#2563eb','#16a34a','#d97706','#dc2626','#7c3aed','#0891b2','#e11d48','#65a30d'];

    const deptCtx = document.getElementById('deptChart');
    if (deptCtx) {
        new Chart(deptCtx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{ data: counts, backgroundColor: colors.slice(0, labels.length), borderWidth: 0 }]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
        });
    }

    const salaryCtx = document.getElementById('salaryChart');
    if (salaryCtx) {
        new Chart(salaryCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{ label: 'Avg Salary (₹)', data: salaries, backgroundColor: colors.slice(0, labels.length), borderRadius: 6 }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, ticks: { callback: v => '₹' + v.toLocaleString() } } }
            }
        });
    }
}
