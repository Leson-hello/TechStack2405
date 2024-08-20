// Đảm bảo chỉ lưu thông tin tài khoản vào localStorage nếu chưa có GIÚP CHẠY trên GIT HUB
if (!localStorage.getItem('users')) {
    const users = {
        "user1": "pass1",
        "user2": "pass2",
        "user3": "pass3"
    };
    localStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('email-input').value;
    const password = document.getElementById('pass-input').value;
    
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (users[username] && users[username] === password) {
        const loginTime = new Date().getTime();  // Lưu thời gian đăng nhập hiện tại
        localStorage.setItem('currentUser', username);
        localStorage.setItem('loginTime', loginTime); // Lưu thời gian đăng nhập
        window.location.href = 'buoi13demoajax_GOC.html';
    } else {
        alert('Tên người dùng hoặc mật khẩu không đúng.');
    }
});

function checkLoginStatus() {
    const loginTime = localStorage.getItem('loginTime');
    const currentTime = new Date().getTime();
    const maxSessionDuration = 60000; // 1 phút = 60 * 1000 = 60,000 mili giây

    if (localStorage.getItem('currentUser')) {
        if (loginTime && (currentTime - loginTime < maxSessionDuration)) {
            // Phiên đăng nhập hợp lệ, người dùng có thể tiếp tục truy cập
            return true;
        } else {
            // Phiên đăng nhập đã hết hạn hoặc không có thông tin đăng nhập, chuyển hướng về trang đăng nhập
            logout();
            return false;
        }
    } else {
        window.location.href = 'login.html';
        return false;
    }
}

function logout() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        localStorage.removeItem('currentUser');
    }
    localStorage.removeItem('loginTime');
    window.location.href = 'login.html';
}

// Kiểm tra trạng thái đăng nhập khi tải trang
if (window.location.pathname.endsWith('buoi13demoajax_GOC.html')) {
    checkLoginStatus();
}