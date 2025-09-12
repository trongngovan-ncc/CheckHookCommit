	// Navigation click animation
	navLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			link.style.transform = 'scale(0.95)';
			link.style.background = 'linear-gradient(90deg, #5f2eea 0%, #4a47a3 100%)';
			setTimeout(() => {
				link.style.transform = 'scale(1)';
				link.style.background = '';
			}, 200);
		});
	});

	// Title animation on load
	const mainTitle = document.querySelector('header h1');
	if (mainTitle) {
		mainTitle.style.opacity = 0;
		mainTitle.style.transform = 'scale(0.8)';
		setTimeout(() => {
			mainTitle.style.transition = 'opacity 0.8s, transform 0.8s';
			mainTitle.style.opacity = 1;
			mainTitle.style.transform = 'scale(1)';
		}, 300);
	}

	// Animate scroll to top button
	scrollBtn.animate([
		{ transform: 'scale(0.8)', opacity: 0.5 },
		{ transform: 'scale(1)', opacity: 1 }
	], {
		duration: 800,
		iterations: Infinity,
		direction: 'alternate'
	});
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
	// Scroll to top button
	const scrollBtn = document.createElement('button');
	scrollBtn.innerText = '↑';
	scrollBtn.id = 'scrollToTopBtn';
	scrollBtn.style.position = 'fixed';
	scrollBtn.style.bottom = '32px';
	scrollBtn.style.right = '32px';
	scrollBtn.style.padding = '12px 18px';
	scrollBtn.style.fontSize = '1.5rem';
	scrollBtn.style.background = 'linear-gradient(90deg, #5f2eea 0%, #4a47a3 100%)';
	scrollBtn.style.color = '#fff';
	scrollBtn.style.border = 'none';
	scrollBtn.style.borderRadius = '50%';
	scrollBtn.style.boxShadow = '0 4px 16px rgba(90, 60, 200, 0.16)';
	scrollBtn.style.cursor = 'pointer';
	scrollBtn.style.opacity = '0';
	scrollBtn.style.transition = 'opacity 0.4s';
	scrollBtn.style.zIndex = '1000';
	document.body.appendChild(scrollBtn);

	window.addEventListener('scroll', function () {
		if (window.scrollY > 200) {
			scrollBtn.style.opacity = '1';
		} else {
			scrollBtn.style.opacity = '0';
		}
	});
	scrollBtn.addEventListener('click', function () {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	// Click effect for articles
	const articles = document.querySelectorAll('article');
	articles.forEach(article => {
		article.addEventListener('mousedown', () => {
			article.style.transform = 'scale(0.98)';
			article.style.boxShadow = '0 8px 32px rgba(90, 60, 200, 0.24)';
		});
		article.addEventListener('mouseup', () => {
			article.style.transform = 'scale(1)';
			article.style.boxShadow = '0 4px 16px rgba(90, 60, 200, 0.16)';
		});
		article.addEventListener('mouseleave', () => {
			article.style.transform = 'scale(1)';
			article.style.boxShadow = '0 4px 16px rgba(90, 60, 200, 0.16)';
		});
	});

	// Footer color transition on hover
	const footer = document.querySelector('footer');
	if (footer) {
		footer.addEventListener('mouseenter', () => {
			footer.style.background = 'linear-gradient(90deg, #5f2eea 0%, #4a47a3 100%)';
		});
		footer.addEventListener('mouseleave', () => {
			footer.style.background = '#4a47a3';
		});
	}
});