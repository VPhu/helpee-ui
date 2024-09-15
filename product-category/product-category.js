document.querySelectorAll('.menu-link').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn việc chuyển trang
        const parent = this.parentElement;

        // Toggle class 'active' để hiển thị hoặc ẩn sub-menu
        parent.classList.toggle('active');

        // Đóng tất cả các sub-menu khác khi một menu được mở
        document.querySelectorAll('.menu-item').forEach(otherItem => {
            if (otherItem !== parent) {
                otherItem.classList.remove('active');
            }
        });
    });
});
