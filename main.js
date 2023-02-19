const accordions = document.getElementsByClassName('accordion')
const arrows = document.getElementsByClassName('arrowImage')
let currentPanel = null
let panelOpen = false

for(let i = 0; i < 5; i++){
    accordions[i].addEventListener('click', (event)=>{
        if (!panelOpen){
            for(let i = 0; i < 5; i++) accordions[i].style.fontWeight = '500'
            event.target.style.fontWeight = '800'
            event.target.style.color = 'black'
            currentPanel = event.target
            panelOpen = true
            arrows[i].style.transform = 'scaleY(-1)'
        }
        else if (currentPanel == event.target && panelOpen){
            currentPanel.style.fontWeight = '500'
            currentPanel.style.color = 'hsl(240, 6%, 50%)'
            panelOpen = false
            arrows[i].style.transform = 'scaleY(1)'        
        }
        else if (currentPanel != event.target && panelOpen){
            currentPanel.click()
            for(let i = 0; i < 5; i++) accordions[i].style.fontWeight = '500'
            event.target.style.fontWeight = '800'
            event.target.style.color = 'black'
            currentPanel = event.target
            panelOpen = true
            arrows[i].style.transform = 'scaleY(-1)'            
        }
    })
}