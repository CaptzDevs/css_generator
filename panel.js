
class Panel{
    constructor(width = '300px',height = '300px',label = 'Panel',pos = {top : 0 ,left : 0,bottom:0,right:0}){
        
        this.width = width
        this.height = height
        this.label = label        

        this._panelID  = (Math.random() + 1).toString(36).substring(2);

        this.panel = document.querySelector(`#panel-${this._panelID}`)
        this.tabRow = document.querySelector(`#tab-row-${this._panelID}`)
        this.panelBody = document.querySelector(`#panel-body-${this._panelID}`)
        this.pos = {
            top : typeof pos.top === 'undefined' ? '' : pos.top,
            left : typeof pos.left === 'undefined' ? '' : pos.left,
            bottom : typeof pos.bottom === 'undefined' ? '' : pos.bottom,
            right : typeof pos.right === 'undefined' ? '' : pos.right,
        }

    }

    getElem(){

        return {
            panel : document.querySelector(`#panel-${this._panelID}`),
            tabRow : document.querySelector(`#tab-row-${this._panelID}`),
            panelBody : document.querySelector(`#panel-body-${this._panelID}`),
        }
    }

    render(){


        document.querySelector('body').insertAdjacentHTML('afterend',`
        <div class="panel" id='panel-${this._panelID}'>
            <span class='panel-label'>${this.label}</span>
            <div class='tab-row' id='tab-row-${this._panelID}'></div>
            <div class='panel-body' id='panel-body-${this._panelID}'></div>

        </div>
        
    `)
    

        this.panel = document.querySelector(`#panel-${this._panelID}`)
        this.tabRow = document.querySelector(`#tab-row-${this._panelID}`)
        this.panelBody = document.querySelector(`#panel-body-${this._panelID}`)

        this.panel.style.width = this.width
        this.panel.style.height = this.height

        this.panel.style.top = this.pos.top
        this.panel.style.left = this.pos.left
        this.panel.style.bottom = this.pos.bottom
        this.panel.style.right = this.pos.right
        
        console.log( this.pos.right)




    }

    
    addTab(tabElem){
      
        tabElem.forEach(item => {

            this.tabRow.insertAdjacentHTML("beforeend",`
                ${item.element()}
            `)


            document.querySelector(`#panel-${this._panelID} > #tab-row-${this._panelID} > #tab-button-${item._tabID}`).addEventListener('click',(e)=>{
                
                document.querySelectorAll(`#panel-${this._panelID} > #tab-row-${this._panelID} > .tab-button`).forEach((item)=>{
                    item.classList.remove('tab-hl')
                })
    
                document.querySelector(`#panel-${this._panelID} > #tab-row-${this._panelID} > #tab-button-${item._tabID}`).classList.add('tab-hl')

                document.querySelectorAll(`#panel-${this._panelID} > #panel-body-${this._panelID} > .tab-page`).forEach((item)=>{
                    item.classList.add('d-none')
                })
                
                if( document.querySelector(`#panel-${this._panelID} > #panel-body-${this._panelID} > #tab-page-${item._tabID}`)){

                    document.querySelector(`#panel-${this._panelID} > #panel-body-${this._panelID} > #tab-page-${item._tabID}`).classList.remove('d-none')
                }

    
            })

        });

      

        

       /*  if(pageElem){
            this.addPage(pageElem)
        }else{
            this.addPage(new Page(tabElem))
        } */




   

    }


 

    
}

class Tab{
    constructor(label = "css"){
        this.tab_lable = label
        this._tabID  = (Math.random() + 1).toString(36).substring(2);
        this.isHL = false

    }

    setTabHl(option){
        this.setHl = option
    }

    addPage(panelBody, page){
        panelBody.insertAdjacentHTML("beforeend",`
            ${page.element(this.setHl)}
        `)

        
        let isHoldingMouse = false
        let checkMouseStartsX = 0
        let checkMouseStartsY = 0
        let elem = null

        $("#backgroundColor").focus((e)=>{
            $('#colorpicker-backgroundColor').click()
        })

        document.querySelectorAll('input[type=number],input[type=text]').forEach((item)=>{
            item.addEventListener('mousedown',(e)=>{
                isHoldingMouse = true
                checkMouseStartsX = e.clientX
                checkMouseStartsY = e.clientY
                elem = e.target
            })

      
            window.addEventListener('mousemove',(e)=>{
                if(isHoldingMouse){
                    if(+elem.value <= +elem.max && +elem.value >= +elem.min ){
                        elem.value = (e.clientX-checkMouseStartsX)-(e.clientY - checkMouseStartsY)
                        
                    }
                    if(+elem.value > +elem.max){
                        elem.value = +elem.max
                    }

                    if(+elem.value < +elem.min){
                        elem.value = +elem.min
                    }
                   
                }

            })

            window.addEventListener('mouseup',(e)=>{
                isHoldingMouse = false
             
            })
        })

        document.querySelectorAll('.selection').forEach((item)=>{
        
            item.addEventListener('wheel',(e)=>{
                e.preventDefault(); // Prevent default scrolling behavior

                var direction = e.deltaY > 0 ? 1 : -1; // Detect scrolling direction
                var currentIndex = e.target.selectedIndex;
                var newIndex = currentIndex + direction;
              
                // Ensure the new index stays within the available options
                newIndex = Math.max(0, Math.min(newIndex, e.target.options.length - 1));
              
                e.target.selectedIndex = newIndex;
               
            })


          
    })

    }
    
    element(){

        let hl = this.isHL ? ' tab-hl' : ''
        let tabIndex = document.querySelectorAll('.tab-button').length

        if(tabIndex === 0 && !this.isHL){
            hl = ' tab-hl'
        }

        console.log(this.tab_lable,this.isHL,hl)

        return `
           <button class='tab-button${hl}' id='tab-button-${this._tabID}'> ${this.tab_lable} </button>
        `
    
    }

}

class Page{
    constructor(tabParent,pageContent){
        this.tab = tabParent
        this._pageID = tabParent._tabID
        this.pageContent  = pageContent 

    }

    element(setHL = undefined){

        this.pageContent = this.pageContent instanceof Array ? this.pageContent.join('') : 'No Content'

        let hl = setHL ? '' : 'd-none'
        let pageIndex = document.querySelectorAll('.tab-page').length

        if(pageIndex === 0 && typeof setHL === 'undefined'){
            hl = ''
        }

        this.tab.element(setHL)

        return `
           <div class='tab-page ${hl}' id='tab-page-${this._pageID}'> ${this.pageContent}</div>
        `

    }
}

class Section{
    constructor(label,sectionContent){
        this.label = label
        this.sectionContent = sectionContent

    }
    
    element(){
        this.content =  this.sectionContent instanceof Array ? this.sectionContent.join('') : 'No Content'
        return `
           <div class='page-section' id='section-${toKebabCase(this.label.toLowerCase())}'> 
           <h3>${this.label}</h3>
            ${this.content} 
            
           </div>
        `
    }
}

class Input{
    constructor(type = '',option = {}){
        this.option = {
            id : option.id,
            name : option.name,
            label :  typeof option.label === 'undefined' ?  '' : option.label,
            placeholder : typeof option.placeholder === 'undefined' ?  '' : option.placeholder,
            disabled : typeof option.disabled === 'undefined' ?  false : option.disabled,
            step : typeof option.step === 'undefined' ?  5 : option.step,
            
            max : typeof option.max === 'undefined' ?  1000 : option.max,
            min : typeof option.min === 'undefined' ?  0 : option.min,
            
            value : typeof option.value === 'undefined' ?  0 : option.value,

            showUnit : typeof option.showUnit === 'undefined' ?  true : option.showUnit,
            showColor : typeof option.showColor === 'undefined' ?  false :  option.showColor,
            showFile : typeof option.showFile === 'undefined' ?  false :  option.showFile,
            dataSet : ['fit-content','transparent','#66000000'],
            cssUnit : typeof option.cssUnit === 'undefined' ?  ['px','%','vw','vh','vmin','vmax','em','rem','pt','in','cm','mm','pc','fr'] :  option.cssUnit,
        }

        this.type = type
        this.cssUnits = this.option.cssUnit
        this.disableCssUnitType = ['color','file']

        this.dataSetList = ''


    }

    dataSet(){
        let optionSet = ''
        this.option.dataSet.forEach(item => {
            optionSet += `<option value="${item}">`
        });
        
        this.dataSetList = `<datalist id='dataList-${this.option.id}'> ${optionSet}</datalist>`
    }
    
    element(){
            
        let cssUnit =  ''
        let unitOption = ''
        let defaultValue = `value='${this.option.value}'`
        let dataset = ''
        this.cssUnits.forEach(item=>{
            cssUnit += `<option value='${item}'>${item}</option> `
        })

        
        if(this.disableCssUnitType.includes(this.type)){
            this.option.showUnit = false
            defaultValue = ''
        }

        if(this.option.showColor){
            unitOption = `<input type='color' style='width:15%;' id='colorpicker-${this.option.id}'/>`
        }
        if(this.option.showUnit){
            unitOption = `<select class='selection-unit' id='unit-${this.option.id}'> ${cssUnit}</select>`
        }
  
        if(this.type === 'text' || this.type === 'color'){

            this.dataSet()
            dataset = this.dataSetList
        }


        if(this.option.showFile){
            unitOption = `
            <label for="file-${this.option.id}" class="custom-file-input" id='file-btn-${this.option.id}'><i class="fa-solid fa-file"></i></label>
            <input type='file' style='opacity:100%;width:15%'; id='file-${this.option.id}'/>`
            
        }

        return `
        <label for="${this.option.id}">${this.option.label}</label>
            <div class='form-group'>
                <input  type='${this.type}'  id='${this.option.id}' placeholder='${this.option.placeholder}'  name ='${this.option.name}' step='${this.option.step}' max='${this.option.max}' min='${this.option.min} '/>
                ${unitOption}
            </div>
            `
    }

}

class InputGroup{
    constructor(label,inputSet = [] , direction = 'row'){
        this.label = label
        this.inputSet = inputSet
        this.content =  this.inputSet instanceof Array ? this.inputSet.join('') : 'No Content'
        this.direction = direction
        
    }
    element(){
        
        return `
        <div class='group'>
        <label for="#">${this.label}</label>
            <div class='form-group ${this.direction}'>
                    ${this.content}
            </div>
        </div>
            `
    }
}

class Selection{
    constructor(option = {},data=[]){
        this.option = {
            id : option.id,
            name : option.name,
            label :  typeof option.label === 'undefined' ?  '' : option.label,
            max : 1000,
            min : -100,

        }
        this.data = data


       
    }

    element(){
        let options = ''

            for(let key in this.data){
                options +=  `<option value='${key}'>${this.data[key]}</option>`
            }

            
            return `
            <label for="${this.option.id}">${this.option.label}</label>
                <div class='form-group'>
                    <select class='selection' id='${this.option.id}' name='${this.option.name}'>
                        ${options}
                    </select>
                </div>
                `
        }

    elementBox(){
            let options = ''
    
                for(let key in this.data){
                    options +=  `<div class='selection-box selection-box-${this.option.id}' id='selection-box-${key}' data-value='${key}'> ${this.data[key]}</div>`
                }
    
              
            
                
                return `
                <label for="${this.option.id}">${this.option.label}</label>
                    <div class='selection-group'>
                        ${options}
                    </div>
                    `
                    

    }
}

class LabelLayer{
    constructor(elem,level,link,parent){
        this.elem = elem
        this.level = level
        this.link = link
        this.parent = parent
    }

    
    element(){
        const rainbowColors = [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'indigo',
            'violet',
            'pink',
            'lightblue',
            'lightgreen',
            'lightyellow',
            'lightpink',
            'lightcyan',
            'lightcoral',
            'lightseagreen',
            'lavender',
            'gold',
            'aqua',
            'chartreuse',
            'orchid'
          ];
          
        return `
        <div class='layer-item' data-linkto="${this.link}"  data-parent="${this.parent}" style='border-left:5px solid ${rainbowColors[this.level]};margin-left:${this.level*15}px' >${this.elem.tagName.toLowerCase()} | ${this.elem.className}</div>
        `
    }
}


//*-------------------------------------------------------------------------------------
//*-----------------------------------MAIN----------------------------------------------
//*-------------------------------------------------------------------------------------

const panel = new Panel('350px','50vh','Panel',{top:'20px',right:'20px'})

const panel2 = new Panel('350px','40vh','Panel2',{top:'55vh',right:'20px'})


panel.render()
panel2.render()


const panelElem = panel.panel
const panelBody = panel.panelBody
const panelTabRow = panel.tabRow

const panelElem2 = panel2.panel
const panelBody2 = panel2.panelBody
const panelTabRow2 = panel2.tabRow

const tabHtml = new Tab('html <i class="fa-solid fa-check"></i>')
const tabCss = new Tab('css <i class="fa-solid fa-check"></i>')
const tablayer = new Tab('Layer <i class="fa-solid fa-layer-group"></i>')

const tablayer2 = new Tab('Layer <i class="fa-solid fa-layer-group"></i>')


tabHtml.setTabHl(true)
tablayer2.setTabHl(true)

panel.addTab([tabHtml,tabCss,tablayer])
panel2.addTab([tablayer])









