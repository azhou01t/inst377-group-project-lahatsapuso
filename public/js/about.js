document.addEventListener('DOMContentLoaded', () => {
    const mainTitle = document.getElementById('main-title');
    const moreInfoBtn = document.getElementById('more-info-btn');
    const additionalInfo = document.getElementById('additional-info');

    mainTitle.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = '#ffcdc2';
    });

    mainTitle.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = '#f9858b';
    });

    moreInfoBtn.addEventListener('click', () => {
        additionalInfo.classList.toggle('hidden');
    });
});
