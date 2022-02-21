// GET LATEST CATEGORIES 

async function getCategories() {
    try {
        const response = await fetch('https://api.currentsapi.services/v1/available/categories?apiKey=iWgLLj0hllmIFim5hb2-jLyPM6xWdF77uJCLD4aQrK_wb96U')
        const data = await response.json()
        displayCategories(data.categories)
    } catch (err) {
        console.log(err)      
    }
}

const displayCategories = (results) => {
    results.forEach(displayCategory)
}

const unordered = document.createElement('ul')
const div = document.querySelector('.container')
div.appendChild(unordered)

const displayCategory = (result) => {
   const list = document.createElement('li')
   const link = document.createElement('a')
   link.href = `./singlecategory.html?category=${result}`
   list.textContent = result

   unordered.appendChild(link)
   link.appendChild(list)

}

getCategories() 



