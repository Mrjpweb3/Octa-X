</section>
  </main>

  <script src="scripts/main.js"></script>
  <script>
    // sample Chart.js config (mock data)
    const ctx = document.getElementById('earningsChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({length:30}, (_,i)=>`Day ${i+1}`),
        datasets: [{
          label: 'Earnings',
          data: Array.from({length:30}, ()=>Math.floor(Math.random()*50)+30),
          borderColor: '#FFD700',
          backgroundColor: 'rgba(255,215,0,0.06)',
          tension: 0.2,
          pointRadius: 0
        }]
      },
      options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}} }
    });
  </script>