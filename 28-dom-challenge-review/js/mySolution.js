const counter = document.getElementById('counter')
const likeList = document.getElementById('list')
const numLikes = {}

let timer = setInterval(function() {
  counter.innerText++
}, 1000)


document.addEventListener('click', function(e) {
  switch (e.target.id) {
    case 'minus':
      counter.innerText--
      break
    case 'plus':
      counter.innerText++
      break
    case 'heart':
      likeNumber()
      break
    case 'pause':
      pauseTimer(e.target)
      break
    case 'resume':
      resumeTimer(e.target)
      break
    case 'submit':
      e.preventDefault()
      renderComment(e.target)
      break
    default:
      break
  }
})


const likeNumber = () => {
  const number = counter.innerText
  if (numLikes[number]) {
    const count = ++numLikes[number]
    const li = document.querySelector(`[data-number="${number}"]`)
    li.innerText = `${number} has been liked ${count} times! 🚀`
    likeList.append(li)
  } else {
    numLikes[number] = 1
    const li = document.createElement('li')
    li.dataset.number = number
    li.innerText = `${number} has been liked! 🤡`
    likeList.append(li)
  }
}

const pauseTimer = button => {
  clearInterval(timer)

  document.getElementById('minus').disabled = true
  document.getElementById('plus').disabled = true
  document.getElementById('heart').disabled = true
  document.getElementById('submit').disabled = true
  
  button.id = 'resume'
  button.innerText = 'resume'
}

const resumeTimer = button => {
  timer = setInterval(function(){
    counter.innerText++
  }, 1000)

  document.getElementById('minus').disabled = false
  document.getElementById('plus').disabled = false
  document.getElementById('heart').disabled = false
  document.getElementById('submit').disabled = false
  
  button.id = 'pause'
  button.innerText = 'pause'
}

const renderComment = button => {
  const comment = button.parentNode.comment.value
  const commentsContainer = document.getElementById('list')
  const p = document.createElement('p')
  
  p.innerText = comment
  commentsContainer.append(p)
}