document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const userProfile = document.querySelector('.user-profile');
    const profileSidebar = document.querySelector('.profile-sidebar');
    const closeSidebar = document.querySelector('.close-sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    const profileForm = document.querySelector('.profile-form');
    const profileInfo = document.querySelector('.profile-info');
    const saveBtn = document.querySelector('.save-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    
    // Toggle profile sidebar
    if (userProfile) {
        userProfile.addEventListener('click', function(e) {
            e.stopPropagation();
            profileSidebar.classList.add('open');
            sidebarOverlay.classList.add('active');
        });
    }
    
    // Close sidebar
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            profileSidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
            // Switch back to view mode when closing
            profileInfo.classList.remove('hidden');
            profileForm.classList.add('hidden');
        });
    }
    
    // Close sidebar when clicking overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            profileSidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
            // Switch back to view mode when closing
            profileInfo.classList.remove('hidden');
            profileForm.classList.add('hidden');
        });
    }
    
    // Edit profile button
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function() {
            profileInfo.classList.add('hidden');
            profileForm.classList.remove('hidden');
            
            // Populate form fields with current values
            document.getElementById('name').value = document.getElementById('profile-name').textContent;
            document.getElementById('email').value = document.getElementById('profile-email').textContent;
        });
    }
    
    // Cancel editing
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function(e) {
            e.preventDefault();
            profileInfo.classList.remove('hidden');
            profileForm.classList.add('hidden');
        });
    }
    
    // Save profile changes
    if (saveBtn) {
        saveBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Update profile info with form values
            document.getElementById('profile-name').textContent = document.getElementById('name').value;
            document.getElementById('profile-email').textContent = document.getElementById('email').value;
            
            // Switch back to view mode
            profileInfo.classList.remove('hidden');
            profileForm.classList.add('hidden');
            
            alert('Profile changes saved!');
        });
    }
    
    // Parallax and scroll effects
    const parallaxImage = document.getElementById('parallax-image');
    
    window.addEventListener('scroll', function() {
        let offset = window.pageYOffset;
        
        if (parallaxImage) {
            parallaxImage.style.transform = 'translateY(' + offset * 0.5 + 'px)';
        }
        
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            const aboutPosition = aboutSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (aboutPosition < screenPosition) {
                document.querySelector('.about-image')?.classList.add('animate-in');
                document.querySelector('.about-content')?.classList.add('animate-in');
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});