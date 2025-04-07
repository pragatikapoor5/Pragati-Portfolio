
    function closeNavbar() {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            new bootstrap.Collapse(navbar).hide();
        }
    }





