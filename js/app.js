document.addEventListener('DOMContentLoaded', function () {

    const content = document.querySelector('.dropdown_content');
    const button = document.querySelector('.dropdown_button');

    function dropdown() {
        button.addEventListener('click', showContent);
    }

    function showContent() {
        content.classList.toggle('dropdown_content-show');
        this.classList.toggle('dropdown_button-active');
    }
    dropdown();
});
