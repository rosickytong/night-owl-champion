// 页面加载完成后的动画效果
document.addEventListener('DOMContentLoaded', function() {
    // 容器加载动画
    const container = document.querySelector('.container');
    const title = document.querySelector('h1');

    // 初始加载时的动画
    setTimeout(() => {
        container.style.animation = 'containerFloat 6s ease-in-out infinite';
        title.style.animation = 'titleGlow 3s ease-in-out infinite alternate';
    }, 100);

    // 鼠标移动视差效果
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        const moveX = mouseX * 20;
        const moveY = mouseY * 20;

        container.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // 鼠标离开时重置位置
    document.addEventListener('mouseleave', function() {
        container.style.transform = 'translate(0, 0)';
    });

    // 添加粒子效果
    createParticles();
});

// 创建背景粒子效果
function createParticles() {
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // 随机位置
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    // 随机大小和动画时长
    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 20 + 10;

    particle.style.cssText = `
        position: fixed;
        left: ${startX}px;
        top: ${startY}px;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        animation: floatParticle ${duration}s linear infinite;
    `;

    document.body.appendChild(particle);

    // 动画结束后移除粒子并创建新的
    setTimeout(() => {
        particle.remove();
        createParticle();
    }, duration * 1000);
}

// 添加粒子浮动动画
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 响应窗口大小变化
window.addEventListener('resize', function() {
    // 可以在这里添加响应式逻辑
});

// 添加键盘交互
document.addEventListener('keypress', function(e) {
    const container = document.querySelector('.container');

    // 按空格键添加特效
    if (e.code === 'Space') {
        e.preventDefault();
        container.style.animation = 'none';
        setTimeout(() => {
            container.style.animation = 'containerFloat 6s ease-in-out infinite, bounce 0.5s ease-out';
        }, 10);
    }
});

// 添加弹跳动画
const bounceStyle = document.createElement('style');
bounceStyle.textContent = `
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0) scale(1);
        }
        25% {
            transform: translateY(-30px) scale(1.1);
        }
        50% {
            transform: translateY(0) scale(0.95);
        }
        75% {
            transform: translateY(-15px) scale(1.05);
        }
    }
`;
document.head.appendChild(bounceStyle);