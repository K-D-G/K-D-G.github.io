window.onload = () => {
    const login_form = document.getElementById('login_form');
    const username_input = document.getElementById('username');
    const password_input = document.getElementById('password');
    const modal = document.getElementById('modal');

    document.getElementById('cross_button').addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    document.getElementById('confirm_button').addEventListener('click', () => {
        modal.classList.remove('show');
    });

    login_form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = username_input.value;
        const password = password_input.value;

        document.getElementById('login_css').remove();
        document.body.innerHTML = '';
        let code = CryptoJS.AES.decrypt(logged_in_js, username + password).toString(CryptoJS.enc.Utf8);

        let ele = document.createElement('script');
        ele.type = 'text/javascript';
        ele.text = code;
        eval(ele.text);
    });
};