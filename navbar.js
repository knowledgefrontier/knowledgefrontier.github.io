// Global Navbar Injection Script

function initNavbar(options = {}) {
    const {
        activePage = '',
        rootPath = './'
    } = options;

    const navbarHTML = `
    <header class="nav-island-container reveal">
        <div class="dynamic-island">
            <div class="island-logo">
                <img src="${rootPath}logo.png" alt="Strata STEM Guide Logo" fetchpriority="high">
            </div>
            <nav class="desktop-only">
                <ul class="island-nav-links">
                    <li><a href="${rootPath}index.html" class="reveal ${activePage === 'home' ? 'active' : ''}">HOME</a></li>
                   
                    <li><a href="${rootPath}subjects.html" class="reveal ${activePage === 'olympiad' ? 'active' : ''}">OLYMPIAD GUIDE</a></li>
                    <li><a href="${rootPath}team.html" class="reveal ${activePage === 'team' ? 'active' : ''}">OUR TEAM</a></li>
                    <li class="has-dropdown">
                        <a href="${rootPath}Grade 6 to 13.html" class="reveal ${activePage === 'grade-selection' ? 'active' : ''}">GRADE 6-13 
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <div class="nav-dropdown">
                            <a href="${rootPath}grade 6-13/Grade 6 Selection.html" class="dropdown-item ${activePage === 'grade6' ? 'active' : ''}">Grade 6</a>
                            <a href="${rootPath}grade 6-13/Grade 7 Selection.html" class="dropdown-item">Grade 7</a>
                            <a href="${rootPath}grade 6-13/Grade 8 Selection.html" class="dropdown-item">Grade 8</a>
                            <a href="${rootPath}grade 6-13/Grade 9 Selection.html" class="dropdown-item">Grade 9</a>
                            <a href="${rootPath}grade 6-13/Grade 10 Selection.html" class="dropdown-item">Grade 10</a>
                            <a href="${rootPath}grade 6-13/Grade 11 Selection.html" class="dropdown-item">Grade 11</a>
                            <a href="${rootPath}grade 6-13/Grade 12 Selection.html" class="dropdown-item">Grade 12</a>
                            <a href="${rootPath}grade 6-13/Grade 13 Selection.html" class="dropdown-item">Grade 13</a>
                        </div>
                    </li>
                    <li id="login-item"><a href="${rootPath}auth.html" id="login-btn" class="reveal">LOGIN</a></li>
                    <li id="logout-item" style="display: none;"><a href="#" id="logout-btn" class="reveal">LOGOUT</a></li>
                </ul>
            </nav>
            <div class="menu-toggle">
                <span></span>
                <span></span>
            </div>
        </div>
    </header>

    <!-- Mobile Navigation Overlay -->
    <div class="mobile-nav">
        <ul class="mobile-nav-links">
            <li><a href="${rootPath}index.html">HOME</a></li>
            <li><a href="${rootPath}subjects.html">OLYMPIAD GUIDE</a></li>
            <li><a href="${rootPath}team.html">OUR TEAM</a></li>
            <li><a href="${rootPath}Grade 6 to 13.html">GRADE 6-13</a></li>
            <li id="mobile-login-item"><a href="${rootPath}auth.html" id="mobile-login-btn">LOGIN</a></li>
            <li id="mobile-logout-item" style="display: none;"><a href="#" id="mobile-logout-btn">LOGOUT</a></li>
        </ul>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Initialize Menu Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            
            if (mobileNav.classList.contains('active')) {
                if (typeof gsap !== 'undefined') {
                    gsap.from('.mobile-nav-links li', {
                        y: 20,
                        opacity: 0,
                        duration: 0.3,
                        stagger: 0.05,
                        ease: "power2.out"
                    });
                }
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });

        // Close menu on link clicks
        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                body.style.overflow = 'auto';
            });
        });

        // Close menu on backdrop click
        mobileNav.addEventListener('click', (e) => {
            if (e.target === mobileNav) {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });
    }

    // Global Auth Check and Logout Logic
    const initAuth = async () => {
        try {
            const { auth } = await import(`${rootPath}firebase-config.js`);
            const { onAuthStateChanged, signOut } = await import("https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js");

            onAuthStateChanged(auth, (user) => {
                const isAuthPage = window.location.pathname.includes('auth.html');
                
                const loginItem = document.getElementById('login-item');
                const logoutItem = document.getElementById('logout-item');
                const mobileLoginItem = document.getElementById('mobile-login-item');
                const mobileLogoutItem = document.getElementById('mobile-logout-item');

                if (user && user.emailVerified) {
                    // Logged in and verified
                    if (loginItem) loginItem.style.display = 'none';
                    if (mobileLoginItem) mobileLoginItem.style.display = 'none';
                    if (logoutItem) logoutItem.style.display = 'block';
                    if (mobileLogoutItem) mobileLogoutItem.style.display = 'block';

                    // Attach logout logic
                    const logoutBtn = document.getElementById('logout-btn');
                    const mobileLogoutBtn = document.getElementById('mobile-logout-btn');

                    const handleLogout = async (e) => {
                        e.preventDefault();
                        try {
                            await signOut(auth);
                        } catch (error) {
                            console.error("Logout error:", error);
                        }
                    };

                    if (logoutBtn) logoutBtn.onclick = handleLogout;
                    if (mobileLogoutBtn) mobileLogoutBtn.onclick = handleLogout;

                    if (isAuthPage) {
                        window.location.href = `${rootPath}index.html`;
                    }
                } else {
                    // Not logged in OR not verified
                    if (loginItem) loginItem.style.display = 'block';
                    if (mobileLoginItem) mobileLoginItem.style.display = 'block';
                    if (logoutItem) logoutItem.style.display = 'none';
                    if (mobileLogoutItem) mobileLogoutItem.style.display = 'none';

                    // If user exists but not verified, and we are on a protected page, maybe redirect?
                    // However, we decided login is optional (mostly). 
                    // If some pages require verification, they should handle it.
                    // But for now, we'll just treat them as logged out in the navbar.
                }
            });
        } catch (error) {
            console.error("Firebase auth initialization failed:", error);
        }
    };

    initAuth();
}

// Auto-run if config is present or on DOMContentLoaded
if (window.navbarConfig) {
    initNavbar(window.navbarConfig);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        if (window.navbarConfig) {
            initNavbar(window.navbarConfig);
        }
    });
}
