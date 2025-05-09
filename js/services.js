// Service item click handlers
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', function() {
        const serviceName = this.querySelector('h3').textContent;
        // You can add specific behavior for each service here
        console.log(`Selected service: ${serviceName}`);
        // For example: window.location.href = `service-details.html?service=${encodeURIComponent(serviceName)}`;
    });
});