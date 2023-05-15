

//?Unuse Fucntion
function copyElement(element) {
    let textarea = document.createElement('textarea');
    let elementCopy = element.outerHTML.replace(/hl-temp-element|hl-element/g, "");
    textarea.value = elementCopy 
  
    document.body.appendChild(textarea);
  
    textarea.select();
  
    document.execCommand('copy');
    
    document.body.removeChild(textarea);

    console.log('Element copied to clipboard!');

    return elementCopy
  
}
//?------------------

//*-------------------------------------------------------------------------------------
//*-----------------------------------MAIN----------------------------------------------
//*-------------------------------------------------------------------------------------


function movePanel(){
    let selectPanel = null
    let offsetLeft  = 0
    let offsetTop  = 0
    let isDraging = false

    window.addEventListener('mousedown',e=>{
        

        selectPanel = e.target
        if(selectPanel.classList.contains('panel')) {

            isDraging = true   
            initialX = e.clientX - selectPanel.offsetLeft;
            initialY = e.clientY - selectPanel.offsetTop;
        }
    })
    
    window.addEventListener('mousemove',e=>{
        

        if(isDraging){
            let newX = e.clientX - initialX;
            let newY = e.clientY - initialY;

            selectPanel.classList.add("moving")
            selectPanel.style.left = newX + "px";
            selectPanel.style.top = newY + "px";
        }
    })

    window.addEventListener('mouseup',e=>{
        
        if(isDraging){
            selectPanel = null
            isDraging = false
            selectPanel.classList.remove("moving")
        }

    })

}


function keyEdit(){
        
    let key
    let selectedElement = null
    window.addEventListener('keydown',(e)=>{
        key = e.key

        if (e.ctrlKey && e.key === 'c') {
    
            if(e.target.style.display !== 'none'){
                selectedElement = copyElement($(".hl-element")[0])
            }
        }

        if (e.ctrlKey && e.key === 'v') {

            if(selectedElement){
                $(".hl-element")[0].insertAdjacentHTML('beforeend',selectedElement)
                renderLayerMap()
            }else{
                navigator.clipboard.readText()
                .then(function(clipboardData) {
                    // Access the clipboard data
                    $(".hl-element")[0].insertAdjacentHTML('beforeend',clipboardData)
                    renderLayerMap()
                })
                
                .catch(function(error) {
                    // Handle any errors
                    console.error('Failed to read clipboard data: ', error);
                });
            }
        }

        if (e.ctrlKey && e.key === 'x') {

                selectedElement = copyElement($(".hl-element")[0])
                $(".hl-element").remove()
                renderLayerMap()
        }

        if (e.key ==='Delete') {
    
            $(".hl-element").remove()
            renderLayerMap()
        }

    })

    window.addEventListener('keyup',(e)=>{
        key = null
    })

    window.addEventListener("wheel",(e)=>{
    

        if(key && key === 'Shift'){
            let direction = e.deltaY > 0 ? -0.1 : 0.1; // Detect scrolling direction
            let scaleString =  $('body')[0].style.transform.toString().match(/[\d\.]+/) 
            let number = scaleString  ? +scaleString[0]+direction : 0.5+direction;
            $('body').css('transform',`scale(${number})`)
        }

    })

}


keyEdit()

movePanel()
   







