// GET Latest News

  async function getLatest() {
    try {
      const response = await fetch('https://api.currentsapi.services/v1/latest-news?apiKey=iWgLLj0hllmIFim5hb2-jLyPM6xWdF77uJCLD4aQrK_wb96U')
      const data = await response.json()
      console.log(data)
      const mainResults = data.news.slice(2,22)
      displayLatestResults(mainResults)
      
      // CREATING TWO MAIN ARTICLES
      const twoResults = data.news.slice(0,2)  
      
      const mainTwo = document.createElement('div')
      mainTwo.className = 'container'

      parent.insertBefore(mainTwo, child)

      const firstArticle = document.createElement('div')
      firstArticle.className = 'col-md-6'
      firstArticle.id = 'first-article'
      
      const url = document.createElement('a')
      url.href = `${twoResults[0].url}`
      
      const heading = document.createElement('h3')
      heading.textContent = `${twoResults[0].title}`
      
      const pic = document.createElement('img')
      
      if (twoResults[0].image === 'None'){
        pic.src = 'https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg'

      }else{
        pic.src = `${twoResults[0].image}`
      }

      const text = document.createElement('p')
      text.textContent = `${twoResults[0].description}`

      const secondArticle = document.createElement('div')
      secondArticle.className = 'col-md-6'
      secondArticle.id = 'second-article'

      const link = document.createElement('a')
      link.href = `${twoResults[1].url}`

      const title = document.createElement('h3')
      title.textContent = `${twoResults[1].title}`

      const picture = document.createElement('img')
      
      if (twoResults[1].image === 'None'){
        picture.src = 'https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg'
      } else {
        picture.src = `${twoResults[1].image}`
      }

      const description = document.createElement('p')
      description.textContent = `${twoResults[1].description}`

      mainTwo.appendChild(firstArticle)
      mainTwo.appendChild(secondArticle)
      
      firstArticle.appendChild(url)
      url.appendChild(heading)
      url.appendChild(pic)
      url.appendChild(text)

      secondArticle.appendChild(link)
      link.appendChild(title)
      link.appendChild(picture)
      link.appendChild(description)
      
    } catch (err) {
        console.log(err)       
    }  
  }
  getLatest()

  function displayLatestResults(results) {
    results.forEach(displayLatestResult) 
  } 

  const latestContent = document.querySelector('.latest-container')
  
  function displayLatestResult({ title, id, image, description, url }) {
    
    const latestDiv = document.createElement('div')
    latestDiv.className = 'latest-div'
    latestDiv.id = `${id}`

    const link = document.createElement('a')
    link.href = `${url}`
    
    const latestTitle = document.createElement('h4')
    latestTitle.textContent = `${title}`

    const picture = document.createElement('img')
    
    if(image === "None"){
      return 
    }else {
      picture.src = `${image}`
      picture.alt = 'latest-image'
    }

    const descrip = document.createElement('p')
    descrip.textContent = `${description}`

    
    latestContent.appendChild(latestDiv)
    latestDiv.appendChild(link)
    link.appendChild(latestTitle)
    link.appendChild(picture)
    link.appendChild(descrip)

  }

// CREATING HEADLINE TITLE

const headlineDiv = document.createElement('div')

const child = document.querySelector('.latest-container')

const parent = child.parentNode

parent.insertBefore(headlineDiv, child)

headlineDiv.className = 'headline-title'

const headline = document.createElement('h1')

headline.textContent = 'Headlines'

headlineDiv.appendChild(headline)

 

















        

