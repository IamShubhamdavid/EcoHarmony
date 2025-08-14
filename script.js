// Simple interactive elements for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Dashboard tab switching
            const tabs = document.querySelectorAll('.dashboard-tabs li');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Animate progress bars when they come into view
            const progressBars = document.querySelectorAll('.progress-bar');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.width = entry.target.style.width;
                    }
                });
            }, { threshold: 0.5 });
            
            progressBars.forEach(bar => {
                observer.observe(bar);
            });
            
            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => 
            {
                anchor.addEventListener('click', function (e) 
                {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView(
                      {
                        behavior: 'smooth'
                      });
                });
            });
        });
