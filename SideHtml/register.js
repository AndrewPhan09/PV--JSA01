document.addEventListener('DOMContentLoaded', function() {
    function validateForm() {
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var phoneNumber = document.getElementById('phonenumber').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('pass').value;
        var confirmPassword = document.getElementById('again').value;

        var errorMessage = '';

        // Kiểm tra điều kiện đăng ký
        if (name.trim() === '' || parseInt(age) < 21 || phoneNumber.length < 8 || !isValidEmail(email) || password.trim() === '' || confirmPassword.trim() === '' || password !== confirmPassword) {
            errorMessage += 'Có lỗi trong quá trình đăng ký. Vui lòng kiểm tra lại thông tin.<br>';

            if (name.trim() === '') {
                errorMessage += 'Họ và tên không được để trống.<br>';
            }

            if (parseInt(age) < 21) {
                errorMessage += 'Tuổi phải lớn hơn hoặc bằng 21.<br>';
            }

            if (phoneNumber.length < 8) {
                errorMessage += 'Số điện thoại phải có ít nhất 8 chữ số.<br>';
            }

            if (!isValidEmail(email)) {
                errorMessage += 'Định dạng email không hợp lệ.<br>';
            }

            if (password.trim() === '') {
                errorMessage += 'Mật khẩu không được để trống.<br>';
            }

            if (password.length < 8) {
                errorMessage += 'Mật khẩu phải có ít nhất 8 kí tự.<br>';
            }

            if (confirmPassword.trim() === '') {
                errorMessage += 'Vui lòng nhập lại mật khẩu.<br>';
            }

            if (password !== confirmPassword) {
                errorMessage += 'Mật khẩu phải trùng khớp.<br>';
            }
        }

        // Hiển thị thông báo lỗi hoặc thành công
        var errorMessageDiv = document.getElementById('error-message');
        if (errorMessage !== '') {
            //Hiển thị thông báo lỗi
            errorMessageDiv.innerHTML = errorMessage;
            errorMessageDiv.classList.add('show');
        } else {
            //Hiển thị thông báo thành công và chuyển hướng về trang chủ
            alert('Đã đăng ký thành công!');
            window.location.href = '../index.html'; // Điều hướng về trang chủ
        }
    }

    // Hàm kiểm tra định dạng email
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Gán hàm validateForm cho sự kiện click của nút Đăng ký
    var registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', validateForm);
});
