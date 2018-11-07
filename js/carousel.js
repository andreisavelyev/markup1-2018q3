const carousel = function() {
	const feedback = document.querySelectorAll('.feedback-container');
	const dotsContainer = document.querySelector('.dots');
	const dots = document.querySelectorAll('.dot');
	dotsContainer.addEventListener('click', function(e) {
		if (e.target.tagName != 'SPAN') {
			return;
		}
		const target = e.target;
		const idx = e.target.dataset.value;
		feedback.forEach(function(item) {
			if (!item.classList.contains('none')) {
				item.classList.add('none');
			}
		});
		dots.forEach(function(item) {
			if (item.classList.contains('active')) {
				item.classList.remove('active');
			}
		});
		feedback[idx].classList.remove('none');
		dots[idx].classList.add('active');
	});

	
}

carousel()