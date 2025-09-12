// Hiệu ứng động cho blog cá nhân

// Fade-in effect for blog posts
document.addEventListener('DOMContentLoaded', function () {
	const posts = document.querySelectorAll('article, #blog-posts');
	posts.forEach(post => {
		post.style.opacity = 0;
		post.style.transform = 'translateY(40px)';
		setTimeout(() => {
			post.style.transition = 'opacity 0.8s cubic-bezier(.77,0,.18,1), transform 0.8s cubic-bezier(.77,0,.18,1)';
			post.style.opacity = 1;
			post.style.transform = 'translateY(0)';
		}, 200);
	});

	// Header shrink on scroll
	const header = document.querySelector('header');
	window.addEventListener('scroll', function () {
		if (window.scrollY > 40) {
			header.style.padding = '16px 0 12px 0';
			header.style.boxShadow = '0 2px 16px rgba(90, 60, 200, 0.12)';
		} else {
			header.style.padding = '32px 0 24px 0';
			header.style.boxShadow = '0 2px 8px rgba(90, 60, 200, 0.08)';
		}
	});

	// Navigation highlight effect
	const navLinks = document.querySelectorAll('nav a');
	navLinks.forEach(link => {
		link.addEventListener('mouseenter', () => {
			link.style.boxShadow = '0 4px 16px rgba(90, 60, 200, 0.16)';
		});
		link.addEventListener('mouseleave', () => {
			link.style.boxShadow = '';
		});
	});
});