        function adoptPet() {
            alert("Thank you for choosing to adopt a pet!");
        }
        function adoptPet() {
    const notification = document.getElementById('customNotification');

    if (notification) {
        notification.style.display = 'flex'; 
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('#customNotification .close-btn');
    const notification = document.getElementById('customNotification');

    if (closeBtn && notification) {
        closeBtn.addEventListener('click', function() {
            notification.style.display = 'none'; 
        });

        window.addEventListener('click', function(event) {
            if (event.target == notification) {
                notification.style.display = 'none';
            }
        });
    }
});