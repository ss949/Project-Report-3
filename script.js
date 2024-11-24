
    let menuItems= document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        if(item.dataset.category === category || category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });