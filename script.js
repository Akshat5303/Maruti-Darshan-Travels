window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav a');
    const button = document.querySelectorAll('header nav a button');
    const logo = document.querySelector('header .logo'); 

    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgb(246, 235, 235)';
        navLinks.forEach(link => link.style.color = 'black');
        button.forEach(button => {
            button.style.backgroundColor = 'black';
            button.style.color = 'white'; 
        });
        logo.style.color = 'black'; 
    } else {
        header.style.backgroundColor = 'transparent';
        navLinks.forEach(link => link.style.color = 'white');
        button.forEach(button => {
            button.style.backgroundColor = 'white';
            button.style.color = 'black'; 
        });
        logo.style.color = 'white'; 
    }
});
