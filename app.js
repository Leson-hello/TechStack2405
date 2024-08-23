// Đảm bảo chỉ lưu thông tin tài khoản vào localStorage nếu chưa có
function initializeUsers() {
    if (!localStorage.getItem('users')) {
        const users = {
            "user1": "pass1",
            "user2": "pass2",
            "user3": "pass3"
        };
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// Xử lý đăng nhập
function handleLogin() {
    document.getElementById('form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('email-input').value;
        const password = document.getElementById('pass-input').value;
        
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        
        if (users[username] && users[username] === password) {
            const loginTime = new Date().getTime();  // Lưu thời gian đăng nhập hiện tại
            localStorage.setItem('currentUser', username);
            localStorage.setItem('loginTime', loginTime); // Lưu thời gian đăng nhập
            sessionStorage.setItem('redirected', 'true'); // Đánh dấu việc chuyển hướng
            
            // Thay đổi URL mà không tạo mục mới trong lịch sử
            history.pushState({}, '', 'buoi13demoajax_GOC.html');
            window.location.href = 'buoi13demoajax_GOC.html'; // Chuyển hướng đến trang mục tiêu
        } else {
            alert('Tên người dùng hoặc mật khẩu không đúng.');
        }
    });
}

// Kiểm tra trạng thái đăng nhập
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
        return false;
    }
}

// Xử lý đăng xuất
function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loginTime');
    window.location.href = 'login.html';
}

// Kiểm tra trạng thái đăng nhập và xử lý chuyển hướng khi tải trang
function handlePageLoad() {
    const pathname = window.location.pathname;
    
    if (pathname.endsWith('buoi13demoajax_GOC.html')) {
        console.log('Kiểm tra đăng nhập tại buoi13demoajax_GOC.html');
        if (!checkLoginStatus()) {
            window.location.href = 'login.html'; // Chuyển hướng về trang đăng nhập nếu phiên đăng nhập không hợp lệ
        }
    } else if (pathname.endsWith('login.html')) {
        console.log('Kiểm tra đăng nhập tại login.html');
        if (checkLoginStatus()) {
            console.log('Đăng nhập hợp lệ');
            if (!sessionStorage.getItem('redirected')) {
                sessionStorage.setItem('redirected', 'true');
                console.log('Chuyển hướng sang buoi13demoajax_GOC.html');
                history.replaceState({}, '', 'buoi13demoajax_GOC.html');
                window.location.href = 'buoi13demoajax_GOC.html';
            } else {
                console.log('Đã chuyển hướng trước đó');
            }
        }
    }
}

// Ngăn người dùng quay lại trang đăng nhập bằng cách sử dụng popstate
function handlePopState() {
    window.addEventListener('popstate', function(event) {
        if (checkLoginStatus()) {
            // Nếu đang đăng nhập, giữ người dùng ở trang chính
            window.history.replaceState({}, '', 'buoi13demoajax_GOC.html');
        }
    });
}

// Khởi tạo và xử lý các sự kiện
initializeUsers();
handleLogin();
handlePageLoad();
handlePopState();
