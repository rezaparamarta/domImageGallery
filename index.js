const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function(e) {

    //cek apakah yang di klik adalah gambar
    if(e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);

        e.target.classList.add('active');

        //menghilangkan active pada gambar lain
        const thumbs = document.querySelectorAll('.thumb');
        thumbs.forEach(function(thumb) {
            if(thumb != e.target) {
                thumb.classList.remove('active');
            }
        });
    };
});