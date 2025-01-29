import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

// when kids name clicked will display their wish
document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if ( clickTarget.dataset.type === "child") {
            const wish = clickTarget.dataset.wish

  const childId = parseInt(clickTarget.dataset.id)
           
         // finding the child name from list
         const names = getChildren ()
         let childName = ""
         for (let i = 0; i < children.length; i++) {
             if (children[i].id === childId) {
               childName = children[i].name;
               break; //exits loop after finding name
             }
         }  
            window.alert (`${childName}'s wish is ${wish} `)
        }
    }
)