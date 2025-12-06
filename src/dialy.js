// ===== JAM DIGITAL & TANGGAL =====
function updateClock() {
    const timeDisplay = document.getElementById('time-display');
    const dateDisplay = document.getElementById('date-display');
    
    if (timeDisplay && dateDisplay) {
        const now = new Date();
        
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        
        const dayName = days[now.getDay()];
        const dateNum = now.getDate();
        const monthName = months[now.getMonth()];
        const year = now.getFullYear();

        dateDisplay.textContent = `${dayName}, ${dateNum} ${monthName} ${year}`;
    }
}

setInterval(updateClock, 1000);
updateClock();


// ===== DATA AKTIVITAS =====
const activitiesData = {
    coding: {
        title: "Sekolah & Coding",
        time: "Pagi - Siang (07:00 - 15:00)",
        description: "Setiap pagi saya berangkat ke SMK Taruna Bhakti untuk belajar Rekayasa Perangkat Lunak (RPL). Di sekolah, saya fokus mempelajari berbagai bahasa pemrograman, framework terbaru, dan best practices dalam software development. Selain mengikuti pelajaran formal, saya juga aktif berdiskusi dengan teman-teman sekelas tentang project yang sedang dikerjakan dan saling berbagi knowledge tentang teknologi terbaru.",
        tools: ["HTML/CSS", "JavaScript", "PHP", "Python", "React", "Node.js", "Git", "VS Code"]
    },
    design: {
        title: "UI/UX Exploration",
        time: "Sore (15:00 - 18:00)",
        description: "Setelah pulang sekolah, saya meluangkan waktu untuk eksplorasi desain UI/UX. Saya suka browsing di Dribbble dan Behance untuk mencari inspirasi dari designer profesional di seluruh dunia. Kemudian saya mencoba mengimplementasikan ide-ide tersebut di Figma, sambil menambahkan sentuhan personal dan kreativitas saya sendiri. Kadang saya juga mencoba redesign aplikasi yang sudah ada untuk melatih skill problem-solving dalam desain.",
        tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Dribbble", "Behance"]
    },
    relax: {
        title: "Santai & Evaluasi",
        time: "Malam (20:00 - 23:00)",
        description: "Di malam hari, saya suka istirahat sejenak dari coding dan desain. Biasanya saya main game untuk refresh otak, scrolling media sosial untuk lihat perkembangan terbaru di tech community, atau nonton video tutorial sambil santai. Saya juga meluangkan waktu untuk evaluasi progress hari ini dan membuat to-do list untuk besok. Kadang saya juga ngobrol dengan teman-teman developer di Discord atau Telegram untuk sharing pengalaman.",
        tools: ["Discord", "Telegram", "Notion", "Spotify", "YouTube", "Netflix"]
    },
    learning: {
        title: "Learning & Exploring",
        time: "Weekend (Sabtu - Minggu)",
        description: "Di akhir pekan, saya fokus untuk learning dan exploring teknologi baru. Saya sering ikut webinar atau workshop online tentang web development, design trends, atau teknologi emerging seperti AI dan blockchain. Saya juga meluangkan waktu untuk belajar dari online course di platform seperti Udemy atau YouTube. Kadang saya juga mencoba build side project untuk praktek skill yang baru dipelajari.",
        tools: ["Udemy", "YouTube", "Medium", "Dev.to", "Stack Overflow", "GitHub"]
    }
};

// ===== DATA HOBY =====
const hobyData = {
    gaming: {
        title: "Gaming",
        icon: "fa-gamepad",
        description: "Gaming adalah salah satu hobi favorit saya untuk refresh pikiran setelah seharian coding. Saya suka main game yang mengasah strategi dan refleks, terutama game kompetitif seperti Mobile Legends, Valorant, atau game indie yang unik. Selain untuk hiburan, gaming juga melatih problem-solving dan decision making yang berguna untuk pekerjaan saya sebagai developer.",
        gallery: [
            {
                url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
                caption: "Gaming setup"
            },
            {
                url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2065&auto=format&fit=crop",
                caption: "Competitive gaming"
            },
            {
                url: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2070&auto=format&fit=crop",
                caption: "Game streaming"
            }
        ],
        favorites: ["Mobile Legends", "Valorant", "Genshin Impact", "Minecraft", "Among Us"]
    },
    photography: {
        title: "Fotografi",
        icon: "fa-camera",
        description: "Saya suka fotografi untuk melatih mata terhadap komposisi, pencahayaan, dan detail visual - yang sangat berguna dalam UI/UX design. Saya sering jalan-jalan sambil foto momen random di jalanan, landscape, atau product photography sederhana untuk konten media sosial. Fotografi juga mengajarkan saya tentang storytelling yang penting dalam design.",
        gallery: [
            {
                url: "https://images.unsplash.com/photo-1606170033648-5d55a3eac3ff?q=80&w=2070&auto=format&fit=crop",
                caption: "Street photography"
            },
            {
                url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
                caption: "Landscape shots"
            },
            {
                url: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop",
                caption: "Product photography"
            }
        ],
        favorites: ["Street Photography", "Landscape", "Product Shots", "Minimalist", "Urban"]
    },
    music: {
        title: "Musik",
        icon: "fa-music",
        description: "Musik adalah teman setia saya saat coding atau designing. Saya paling suka dengarkan Lo-Fi Hip Hop karena beat-nya yang mellow dan tidak mengganggu konsentrasi. Kadang juga dengerin Synthwave atau Chill Electronic untuk vibe yang berbeda. Musik membantu saya masuk ke 'zone' dimana produktivitas dan kreativitas mencapai puncaknya.",
        gallery: [
            {
                url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
                caption: "Music workspace"
            },
            {
                url: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=2074&auto=format&fit=crop",
                caption: "Listening setup"
            },
            {
                url: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2072&auto=format&fit=crop",
                caption: "Music production"
            }
        ],
        favorites: ["Lo-Fi Hip Hop", "Synthwave", "Chill Electronic", "Jazz", "Ambient"]
    },
    reading: {
        title: "Membaca",
        icon: "fa-book-open",
        description: "Saya rajin membaca artikel teknologi terbaru, blog post dari developer profesional, dan dokumentasi framework atau library baru. Platform favorit saya adalah Medium, Dev.to, dan blog resmi dari perusahaan tech seperti Google Developers atau Mozilla. Membaca membuat saya selalu update dengan perkembangan industri dan memperluas wawasan tentang best practices dalam coding.",
        gallery: [
            {
                url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2090&auto=format&fit=crop",
                caption: "Reading tech articles"
            },
            {
                url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2028&auto=format&fit=crop",
                caption: "Programming books"
            },
            {
                url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
                caption: "Study documentation"
            }
        ],
        favorites: ["Medium", "Dev.to", "CSS-Tricks", "Smashing Magazine", "A List Apart"]
    },
    design: {
        title: "Design Exploration",
        icon: "fa-palette",
        description: "Saya suka eksperimen dengan warna, typography, dan layout untuk menciptakan visual yang menarik dan fungsional. Saya sering mencoba trend design terbaru seperti Glassmorphism, Neumorphism, atau 3D elements. Kadang saya juga redesign logo atau create design system untuk praktek. Design exploration membantu saya mengasah kreativitas dan style personal.",
        gallery: [
            {
                url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
                caption: "Color palette design"
            },
            {
                url: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop",
                caption: "Typography experiments"
            },
            {
                url: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2052&auto=format&fit=crop",
                caption: "Layout design"
            }
        ],
        favorites: ["Glassmorphism", "Minimalism", "Gradients", "3D Elements", "Dark Mode"]
    },
    coffee: {
        title: "Coffee Time",
        icon: "fa-mug-hot",
        description: "Ngopi sambil coding atau brainstorming adalah ritual harian saya. Saya suka explore berbagai jenis kopi dan café dengan vibe yang nyaman untuk kerja. Kadang saya juga ngopi bareng teman-teman developer untuk diskusi project atau sekadar sharing pengalaman. Coffee time adalah moment dimana ide-ide kreatif sering muncul.",
        gallery: [
            {
                url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
                caption: "Coffee and laptop"
            },
            {
                url: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=2036&auto=format&fit=crop",
                caption: "Café workspace"
            },
            {
                url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2074&auto=format&fit=crop",
                caption: "Coffee brewing"
            }
        ],
        favorites: ["Espresso", "Cappuccino", "Latte", "Cold Brew", "Americano"]
    }
};


// ===== MODAL AKTIVITAS (TANPA GALLERY) =====
const activityModal = document.getElementById('activityModal');
const modalBody = document.getElementById('modalBody');
const activityCards = document.querySelectorAll('.activity-category-card');

activityCards.forEach(card => {
    card.addEventListener('click', function() {
        const activityType = this.getAttribute('data-activity');
        const data = activitiesData[activityType];
        
        if (data) {
            showActivityModal(data);
        }
    });
});

function showActivityModal(data) {
    let toolsHTML = '';
    data.tools.forEach(tool => {
        toolsHTML += `<span class="tool-tag">${tool}</span>`;
    });

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${data.title}</h2>
            <div class="modal-time">${data.time}</div>
        </div>
        <div class="modal-description">
            ${data.description}
        </div>
        <div class="modal-tools">
            <h3><i class="fa-solid fa-wrench"></i> Tools & Technologies</h3>
            <div class="tools-list">
                ${toolsHTML}
            </div>
        </div>
    `;

    activityModal.classList.add('active', 'zoom-in');
    activityModal.classList.remove('zoom-out');
    document.body.style.overflow = 'hidden';
}


// ===== MODAL HOBY (DENGAN GALLERY) =====
const hobyModal = document.getElementById('hobyModal');
const hobyModalBody = document.getElementById('hobyModalBody');
const hobyCards = document.querySelectorAll('.hoby-card');

hobyCards.forEach(card => {
    card.addEventListener('click', function() {
        const hobyType = this.getAttribute('data-hoby');
        const data = hobyData[hobyType];
        
        if (data) {
            showHobyModal(data);
        }
    });
});

function showHobyModal(data) {
    let galleryHTML = '';
    data.gallery.forEach(item => {
        galleryHTML += `
            <div class="gallery-item">
                <img src="${item.url}" alt="${item.caption}">
                <div class="gallery-caption">${item.caption}</div>
            </div>
        `;
    });

    let favoritesHTML = '';
    data.favorites.forEach(fav => {
        favoritesHTML += `<span class="tool-tag">${fav}</span>`;
    });

    hobyModalBody.innerHTML = `
        <div class="modal-header">
            <h2><i class="${data.icon}"></i> ${data.title}</h2>
        </div>
        <div class="modal-description">
            ${data.description}
        </div>
        <div class="modal-gallery">
            <h3><i class="fa-solid fa-images"></i> Gallery</h3>
            <div class="gallery-grid">
                ${galleryHTML}
            </div>
        </div>
        <div class="modal-tools">
            <h3><i class="fa-solid fa-star"></i> Favorites</h3>
            <div class="tools-list">
                ${favoritesHTML}
            </div>
        </div>
    `;

    hobyModal.classList.add('active', 'zoom-in');
    hobyModal.classList.remove('zoom-out');
    document.body.style.overflow = 'hidden';
}


// ===== CLOSE MODAL DENGAN ANIMASI ZOOM OUT =====
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-close') || 
        e.target.classList.contains('modal-overlay')) {
        closeAllModals();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

function closeAllModals() {
    // Tambah animasi zoom-out
    activityModal.classList.add('zoom-out');
    hobyModal.classList.add('zoom-out');
    
    // Tunggu animasi selesai baru hapus modal
    setTimeout(() => {
        activityModal.classList.remove('active', 'zoom-in', 'zoom-out');
        hobyModal.classList.remove('active', 'zoom-in', 'zoom-out');
        document.body.style.overflow = 'auto';
    }, 300);
}


// ===== SMOOTH SCROLL & ACTIVE NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    function setActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);
});


// ===== SCROLL ANIMATIONS =====
function revealOnScroll() {
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);


// ===== HEADER SCROLL EFFECT =====
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(21, 16, 34, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(21, 16, 34, 0.5)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});


// ===== CONSOLE MESSAGE =====
console.log('%c👋 Hello Developer!', 'color: #7D52FD; font-size: 20px; font-weight: bold;');
console.log('%cSelamat datang di Daily Life page - Andyka Fadhil Pratama', 'color: #9D86FF; font-size: 14px;');
console.log('%cJika kamu tertarik untuk berkolaborasi, silakan hubungi saya! 🚀', 'color: #D0CFD3; font-size: 12px;');
