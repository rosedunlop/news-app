const urlParams = new URLSearchParams(window.location.search)
const categoryValue = urlParams.get('category')
console.log(categoryValue)

const main = document.querySelector('main')
const heading = document.createElement('h1')
heading.textContent = `${categoryValue}`

main.appendChild(heading)

const getCategory = async () => {
  try {
    const response = await fetch(`https://api.currentsapi.services/v1/search?keywords=${categoryValue}&language=en&apiKey=iWgLLj0hllmIFim5hb2-jLyPM6xWdF77uJCLD4aQrK_wb96U`)
    const data = await response.json()
    console.log(data.news)
    displayResults(data.news)
      
  } catch (err) {
    console.log(err)     
  }    
}

const displayResults = (results) => {
    results.forEach(displayResult)
}

const container = document.createElement('div')
container.className = 'container'

main.appendChild(container)

const displayResult = ({ title, image, description, url }) => {
  const div = document.createElement('div')
  div.className = 'category-div'

  const link = document.createElement('a')
  link.href = `${url}` 

  const heading = document.createElement('h4')
  heading.textContent = `${title}`

  const picture = document.createElement('img')

  if(image === 'None'){
    return 
  }else {
      picture.src = `${image}`
      picture.alt = '=single-category'
  }

  const descrip = document.createElement('p')
  descrip.textContent = `${description}`

  container.appendChild(div)
  div.appendChild(link)
  link.appendChild(heading)
  link.appendChild(picture)
  link.appendChild(descrip)

}

getCategory()