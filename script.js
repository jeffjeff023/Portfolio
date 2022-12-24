const menu = () => {
    
    const open = document.getElementById('menu')

    open.classList.toggle('opened');
    open.setAttribute('aria-expanded', open.classList.contains('opened'))

}

const toggleNav = () => {
    const navSize = document.getElementById("myNav").style.height;
    if (navSize == '100%') {
      return close();
    }
    return open();
  }
  
  const open = () => {
    document.getElementById("myNav").style.height = '100%';
    document.getElementById("logo").style.color = '#d3d3d3';
    document.getElementById("logo").style.opacity = 1;
  }
  
  const close = () => {
    document.getElementById("myNav").style.height = "0";
    document.getElementById("logo").style.color = 'black';
  }

  const collapse = () => {
    return close();
  }

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

  const messages = document.querySelectorAll('.message')

  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("animate", entry.isIntersecting)
      if (entry.isIntersecting) observer1.unobserve(entry.target)
    })
  },
  {
    threshold: 1,
  }
  )

  messages.forEach(message => {
    observer1.observe(message)
  })

  const info = document.querySelectorAll('.me')
  
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("animate_2", entry.isIntersecting)
      if (entry.isIntersecting) observer2.unobserve(entry.target)
    })
  },
  {
    threshold: 1,
  }
  )

  info.forEach(me => {
    observer2.observe(me)
  })

  