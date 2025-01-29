import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

// when celebrity's name clicked will display their sport
document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if ( clickTarget.dataset.type === "celebrity") {
            const sport = clickTarget.dataset.sport
            const celebrityId = parseInt(clickTarget.dataset.id)
           
         // finding the celebrity name from list
         const name = getCelebrities ()
         let celebName = ""
         for (let i = 0; i < celebrities.length; i++) {
             if (celebrities[i].id === celebrityId) {
               celebName = celebrities[i].name;
               break; //exits loop after finding name
             }
         }  
           
           
           
            window.alert (`${celebName} is a ${sport} star`)
        }
    }
)