const textContainer = document.getElementById('typing');

const animateText = (text) => {
  let index = 0;
  const interval = setInterval(() => {
    textContainer.innerHTML = text.substring(0, index);
    index++;
    if (index > text.length) {
      clearInterval(interval);
    }
  }, 100);
}

setTimeout(() => {
  animateText('web developer');
}, 4000);

const texts = document.querySelectorAll('.text')

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    })
  },
  {
    threshold: 1,
  }
  )

  texts.forEach(text => {
    observer.observe(text)
  })