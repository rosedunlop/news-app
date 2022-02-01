
// GET Latest News

  async function getLatest() {
    try {
      const response = await fetch('https://api.currentsapi.services/v1/latest-news?apiKey=iWgLLj0hllmIFim5hb2-jLyPM6xWdF77uJCLD4aQrK_wb96U')
      const data = await response.json()
      console.log(data)
      displayLatestResults(data.news)
      } catch (err) {
        console.log(err)       
      }  
  }
  getLatest()

  function displayLatestResults(results) {
    results.forEach(displayLatestResult) 
  } 

  const latestContent = document.querySelector('.latest-container')

  function displayLatestResult({ title, id }) {
    
    const latestDiv = document.createElement('div')
    latestDiv.className = 'latest-div'
    latestDiv.id = `${id}`
    const latestTitle = document.createElement('h2')

    latestTitle.textContent = `${title}`
    
    latestContent.appendChild(latestDiv)
    latestDiv.appendChild(latestTitle)

  }


        

