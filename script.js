const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', ()=> {
    sidebar.classList.toggle('active');
});
window.onload = function() {
    var sidebar = document.querySelector('.sidebar');
    var resizer = document.querySelector('.resizer');
    var isResizing = false;

    resizer.addEventListener('mousedown', function(e) {
        isResizing = true;
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    });

    function resize(e) {
        if (isResizing) {
            var sidebarWidth = e.clientX;
            sidebar.style.width = sidebarWidth + 'px';
        }
    }

    function stopResize() {
        isResizing = false;
        document.removeEventListener('mousemove', resize);
    }
};
