// GET LATEST CATEGORIES 

async function getCategories() {
    try {
        const response = await fetch('https://api.currentsapi.services/v1/available/categories?apiKey=iWgLLj0hllmIFim5hb2-jLyPM6xWdF77uJCLD4aQrK_wb96U')
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)      
    }
}

getCategories()