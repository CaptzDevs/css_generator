
class Panel{
    constructor(width = '300px',height = '300px',label = 'Panel'){
        
        this.width = width
        this.height = height
        this.label = label        

        this._panelID  = (Math.random() + 1).toString(36).substring(2);

        this.panel = document.querySelector(`#panel-${this._panelID}`)
        this.tabRow = document.querySelector(`#tab-row-${this._panelID}`)
        this.panelBody = document.querySelector(`#panel-body-${this._panelID}`)

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

    }

    
    addTab(tabElem){
      
        tabElem.forEach(item => {

            this.tabRow.insertAdjacentHTML("beforeend",`
                ${item.element()}
            `)

            document.querySelector(`#tab-button-${item._tabID}`).addEventListener('click',(e)=>{
                document.querySelectorAll('.tab-button').forEach((item)=>{
                    item.classList.remove('tab-hl')
                })
    
                document.querySelectorAll('.tab-page').forEach((item)=>{
                    item.classList.add('d-none')
                })
                
                if( document.querySelector(`#tab-page-${item._tabID}`)){

                    document.querySelector(`#tab-page-${item._tabID}`).classList.remove('d-none')
                }

                document.querySelector(`#tab-button-${item._tabID}`).classList.add('tab-hl')
    
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
    }

    addPage(panelBody, page){
        panelBody.insertAdjacentHTML("beforeend",`
            ${page.element()}
        `)

        
        let isHoldingMouse = false
        let checkMouseStartsX = 0
        let checkMouseStartsY = 0
        let elem = null
        
        document.querySelectorAll('input[type=number]').forEach((item)=>{
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
    }
    
    element(){

        let hl = ''
        let tabIndex = document.querySelectorAll('.tab-button').length

        if(tabIndex === 0){
            hl = ' tab-hl'
        }

        return `
           <button class='tab-button${hl}' id='tab-button-${this._tabID}'> ${this.tab_lable} </button>
        `
    
    }

}

class Page{
    constructor(tabParent,pageContent){
        this._pageID = tabParent._tabID
        this.pageContent  = pageContent 

    }


    element(){

        this.pageContent = this.pageContent instanceof Array ? this.pageContent.join('') : 'No Content'

        let hl = 'd-none'
        let pageIndex = document.querySelectorAll('.tab-page').length

        if(pageIndex === 0){
            hl = ''
        }


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
           <div class='page-section' id='section-${this.label.toLowerCase()}'> 
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
            
            max : typeof option.max === 'undefined' ?  1000 : option.max,
            min : typeof option.min === 'undefined' ?  0 : option.min,
            
            value : typeof option.value === 'undefined' ?  0 : option.value,

            showUnit : typeof option.showUnit === 'undefined' ?  true : option.showUnit,
            showColor : typeof option.showColor === 'undefined' ?  false :  option.showColor,
            showFile : typeof option.showFile === 'undefined' ?  false :  option.showFile,


   
        }

        this.type = type

        this.cssUnits = ['px','%','vw','vh','vmin','vmax','em','rem','pt','in','cm','mm','pc','fr'];

        this.disableCssUnitType = ['color','file']

        
        
   

    }


    
    element(){
            
      

        let cssUnit =  ''
        let unitOption = ''
        let defaultValue = `value='${this.option.value}'`
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
        if(this.option.showFile){
            unitOption = `
            <label for="file-${this.option.id}" class="custom-file-input" id='file-btn-${this.option.id}'><i class="fa-solid fa-file"></i></label>
            <input type='file' style='opacity:100%;width:15%'; id='file-${this.option.id}'/>`
        }

        return `
        <label for="${this.option.id}">${this.option.label}</label>
            <div class='form-group'>
                <input  type='${this.type}' id='${this.option.id}' placeholder='${this.option.placeholder}'  name ='${this.option.name}' step='5' max='${this.option.max}' min='${this.option.min} '/>
                ${unitOption}
            </div>
            `
    }

}

class InputGroup{
    constructor(label,inputSet = []){
        this.label = label
        this.inputSet = inputSet
        this.content =  this.inputSet instanceof Array ? this.inputSet.join('') : 'No Content'

    }
    element(){
        
        return `
        <label for="#">${this.label}</label>
            <div class='form-group'>
                    ${this.content}
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


//*-------------------------------------------------------------------------------------
//*-----------------------------------MAIN----------------------------------------------
//*-------------------------------------------------------------------------------------




document.addEventListener('DOMContentLoaded', async () => {
    // Your code here...

    const panel = new Panel('350px','90vh','Panel',true)

    panel.render()

    const panelElem = panel.panel
    const panelBody = panel.panelBody
    const panelTabRow = panel.tabRow
    
    const tabHtml = new Tab('html <i class="fa-solid fa-check"></i>')
    const tabCss = new Tab('css <i class="fa-solid fa-check"></i>')
    const tablayer = new Tab('Layer <i class="fa-solid fa-layer-group"></i>')

    const page = new Page(tabHtml)
    
    const sectionSizing = new Section("Sizing",
    [
        new Input('number',{id:'size',name:'size',label:'size',showUnit:false}).element(),
        new Input('number',{id:'width',name:'width',label:'W'}).element(),
        new Input('number',{id:'height',name:'height',label:'H'}).element(),
    ])

    const sectionPadding= new Section("Padding",
    [
        new Input('number',{id:'padding',name:'padding',label:'padding <i class="fa-solid fa-border-outer"></i>'}).element(),
        new Input('number',{id:'paddingTop',name:'paddingTop',label:'paddingTop <i class="fa-solid fa-border-top"></i>'}).element(),
        new Input('number',{id:'paddingLeft',name:'paddingLeft',label:'paddingLeft <i class="fa-solid fa-border-left"></i>'}).element(),
        new Input('number',{id:'paddingBottom',name:'paddingBottom',label:'paddingBottom <i class="fa-solid fa-border-bottom"></i>'}).element(),
        new Input('number',{id:'paddingRight',name:'paddingRight',label:'paddingRight <i class="fa-solid fa-border-right"></i>'}).element(),
    ])

    const sectionMargin = new Section("Margin",
    [

        new Input('number',{id:'margin',name:'margin',label:'margin <i class="fa-solid fa-border-top"></i>'}).element(),
        new Input('number',{id:'marginTop',name:'marginTop',label:'marginTop <i class="fa-solid fa-border-top"></i>'}).element(),
        new Input('number',{id:'marginLeft',name:'marginLeft',label:'marginLeft <i class="fa-solid fa-border-left"></i>'}).element(),
        new Input('number',{id:'marginBottom',name:'marginBottom',label:'marginBottom <i class="fa-solid fa-border-bottom"></i>'}).element(),
        new Input('number',{id:'marginRight',name:'marginRight',label:'marginRight <i class="fa-solid fa-border-right"></i>'}).element(),
    ])

    const sectionBorderRadius = new Section("BorderRadius",
    [

        new Input('number',{id:'borderRadius',name:'borderRadius',label:' BorderRadius <i class="fa-solid fa-border-top-left"></i>'}).element(),
        new Input('number',{id:'borderTopLeftRadius',name:'borderTopLeftRadius',label:'TopLeft <i class="fa-solid fa-border-top-left"></i>'}).element(),
        new Input('number',{id:'borderTopRightRadius',name:'borderTopRightRadius',label:'TopRight <i class="fa-solid fa-border-top-left fa-flip-horizontal"></i>'}).element(),
        new Input('number',{id:'borderBottomLeftRadius',name:'borderBottomLeftRadius',label:'BottomLeft <i class="fa-solid fa-border-bottom-right  fa-flip-horizontal"></i>'}).element(),
        new Input('number',{id:'borderBottomRightRadius',name:'borderBottomRightRadius',label:'BottomRight <i class="fa-solid fa-border-bottom-right"></i>'}).element(),

    ])


    const sectionBorder = new Section("Border",
    [
        new InputGroup('Border',[ 
            new Input('number',{id:'borderWidth',name:'border',placeholder:'Width',showUnit:false}).element(),
            new Selection(

                {id:'borderStyle',name:'border'},
                {
                    'solid': 'solid',
                    'dotted': 'dotted',
                    'dashed': 'dashed',
                    'double': 'double',
                    'groove': 'groove',
                    'ridge': 'ridge',
                    'inset': 'inset',
                    'outset': 'outset',
                    'none': 'none',
                    'hidden': 'hidden',
                    
                }
                ).element(),
            new Input('color', {id:'borderColor',name:'border',placeholder:'Color'}).element(),
        ]).element(),

        new InputGroup('Top',[ 
            new Input('number',{id:'borderTopWidth',name:'borderTopWidth',placeholder:'Width',showUnit:false}).element(),
            new Selection(

                {id:'borderTopStyle',name:'borderStyle'},
                {
                    'solid': 'solid',
                    'dotted': 'dotted',
                    'dashed': 'dashed',
                    'double': 'double',
                    'groove': 'groove',
                    'ridge': 'ridge',
                    'inset': 'inset',
                    'outset': 'outset',
                    'none': 'none',
                    'hidden': 'hidden',
                    
                }
                ).element(),
            new Input('color', {id:'borderTopColor',name:'borderTopColor',placeholder:'Color'}).element(),
        ]).element(),

        new InputGroup('Left',[ 
            new Input('number',{id:'borderLeftWidth',name:'borderLeftWidth',placeholder:'Width',showUnit:false}).element(),
            new Selection(

                {id:'borderLeftStyle',name:'borderStyle'},
                {
                    'solid': 'solid',
                    'dotted': 'dotted',
                    'dashed': 'dashed',
                    'double': 'double',
                    'groove': 'groove',
                    'ridge': 'ridge',
                    'inset': 'inset',
                    'outset': 'outset',
                    'none': 'none',
                    'hidden': 'hidden',
                    
                }
                ).element(),
            new Input('color', {id:'borderLeftColor',name:'borderLeftColor',placeholder:'Color',}).element(),

        ]).element(),
        new InputGroup('Bottom',[ 
            new Input('number',{id:'borderBottomWidth',name:'borderBottomWidth',placeholder:'Width',showUnit:false}).element(),
            new Selection(

                {id:'borderBottomStyle',name:'borderStyle'},
                {
                    'solid': 'solid',
                    'dotted': 'dotted',
                    'dashed': 'dashed',
                    'double': 'double',
                    'groove': 'groove',
                    'ridge': 'ridge',
                    'inset': 'inset',
                    'outset': 'outset',
                    'none': 'none',
                    'hidden': 'hidden',
                    
                }
                ).element(),
            new Input('color', {id:'borderBottomColor',name:'borderBottomColor',placeholder:'Color',}).element(),

        ]).element(),
        new InputGroup('Right',[ 
            new Input('number',{id:'borderRightWidth',name:'borderRightWidth',placeholder:'Width',showUnit:false}).element(),
                 new Selection(

            {id:'borderRightStyle',name:'borderStyle'},
            {
                'solid': 'solid',
                'dotted': 'dotted',
                'dashed': 'dashed',
                'double': 'double',
                'groove': 'groove',
                'ridge': 'ridge',
                'inset': 'inset',
                'outset': 'outset',
                'none': 'none',
                'hidden': 'hidden',
                
            }
            ).element(),
            new Input('color', {id:'borderRightColor',name:'borderRightColor',placeholder:'Color',}).element(),

        ]).element(),


    ])



    const sectionBorderTestSelection = new Section("Border",
    [
        new Selection(

        {id:'borderSide',name:'borderSide',label:'Side'},
        {
            'all': 'all',
            'top': 'top',
            'bottom': 'bottom',
            'left': 'left',
            'right': 'right'}
        ).element(),

        new Selection(

            {id:'borderStyle',name:'borderStyle'},
            {
                'solid': 'solid',
                'dotted': 'dotted',
                'dashed': 'dashed',
                'double': 'double',
                'groove': 'groove',
                'ridge': 'ridge',
                'inset': 'inset',
                'outset': 'outset',
                'none': 'none',
                'hidden': 'hidden',
                
            }
            ).element(),

        new Input('number',{id:'borderWidth',name:'borderWidth',label:'Border Width'}).element(),
        new Input('color',{id:'borderColor',name:'borderColor',label:'Border Color'}).element(),
    ])


    const sectionBackground = new Section("Background",
    [

        new Input('text',{id:'backgroundColor',name:'backgroundColor',label:'Background Color',showUnit:false,showColor:true}).element(),
        new Input('text',{id:'backgroundImage',name:'backgroundImage',label:'background image',showFile:true}).element(),


        new InputGroup('background Position',[ 
,
                new Input('number',{id:'backgroundPositionX',name:'backgroundPositionX',max:5000,min:-5000}).element(),
                new Input('number',{id:'backgroundPositionY',name:'backgroundPositionY',max:5000,min:-5000}).element(),

            ]).element(),
            
            
     /*    new InputGroup('',[ 

            new Selection(
                {id:'backgroundPositionX',name:'backgroundPositionX'},
                {
                    'left': 'left',
                    'center': 'center',
                    'right': 'right',

                }
            ).element(),

            new Selection(
                {id:'backgroundPositionY',name:'backgroundPositionY'},
                {
                    'top': 'top',
                    'center': 'center',
                    'bottom' : 'bottom',

                }
            ).element(),

        ]).element(), */

        

        new Selection(

            {id:'backgroundRepeat',name:'backgroundRepeat',label:'Background Repeat'},
            {
                'no-repeat': 'no-repeat',
                'repeat': 'repeat',
            }
            ).element(),

            new Input('number',{id:'backgroundSize',name:'backgroundSize',max:5000,min:-5000}).element(),

     /*        new InputGroup('background Size',[ 
                new Input('number',{id:'backgroundSize',name:'backgroundSize',placeholder:'Width',showUnit:false}).element(),
                   
            new Selection(
                {id:'backgroundSize',name:'backgroundSize'},
                {
                    'cover': 'cover',
                    'contain': 'contain',
                }
                ).element(),
        
            ]).element(), */


    ])

    const sectionBorderTest = new Section("Background",
    [
        new Selection(

        {id:'side',name:'side',label:'Side'},
        {
            'all': '<i class="fa-solid fa-border-outer"></i>',
            'top': '<i class="fa-duotone fa-border-top"></i>',
            'bottom': '<i class="fa-duotone fa-border-bottom"></i>',
            'left': '<i class="fa-duotone fa-border-left"></i>',
            'right': '<i class="fa-duotone fa-border-right"></i>'}
        ).elementBox(),

        new Input('number',{id:'borderWidth',name:'borderWidth',label:'Border Width'}).element(),
        new Input('number',{id:'heigth',name:'heigth',label:'Heigth'}).element(),
    ])


    page.pageContent = [
        sectionSizing.element(),
        sectionBackground.element(),
        sectionPadding.element(),
        sectionMargin.element(),
        sectionBorderRadius.element(),
        sectionBorder.element(),
    ]
    
    panel.addTab([tabHtml,tabCss,tablayer])
    tabHtml.addPage(panelBody,page)


    //*---------------------------------------------------------------------------------------------


    function splitValue(value) {
        const match = value.match(/^(\d+\.?\d*)(\D*)$/);
        return {
          number: parseFloat(match[1]),
          unit: match[2]
        };
      }
      


   
      function setColor(styles, cssProp){
        if (styles.backgroundColor === 'rgba(0, 0, 0, 0)'){
            console.log('nocolor')
            return 'transparent'
        }else if(checkColorFormat(styles.getPropertyValue(cssProp)) === 'rgb'){
            return rgbToHex(styles.getPropertyValue(cssProp))
        }else{
            return  styles.getPropertyValue(cssProp)
        }
      }


      
      function hasParentWithName(element, parentName = 'panel') {
        var parent = element.parentElement;
        while (parent) {
          if (parent.className.toLowerCase() === parentName.toLowerCase()) {
            return true;
          }
          parent = parent.parentElement;
        }
        return false;
      }

      function getImageURL(str) {
        const matches = str.match(/\((.*?)\)/);
        return matches && matches.length > 1 ? matches[1].replace(/"/g, '') : null;
      }
   
      function ishtml(url) {
        console.log(url)
        const imageExtensions = ['.html'];
        const extension = url && url.split('.').pop().toLowerCase();
        return imageExtensions.includes(`.${extension}`);
      }

      function isImageUrl(url) {
        console.log(url)
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];
        const extension = url && url.split('.').pop().toLowerCase();
        console.log(imageExtensions.includes(`.${extension}`))
        return imageExtensions.includes(`.${extension}`);
      }

      function openFileDialog(e){

        console.log(e)
    }

      async function isImageUrl2(url) {
        try {
          const response = await fetch(url, { method: 'HEAD' });
          if (response.ok) {
            const contentType = response.headers.get('Content-Type');
            return contentType && contentType.startsWith('image/');
          }
        } catch (error) {
          console.error('Error occurred while checking image URL:', error);
        }
        
        return false;
      }
      //*--------------------------------------------------------------------------------------------------
      //*--------------------------------------------------------------------------------------------------
      //*--------------------------------------------------------------------------------------------------


      let spVal =  splitValue
      let element , parent ,styles

        $(window).click(e=>{
            
            if((!hasParentWithName(e.target) && e.target.tagName !== "HTML")){
                element = e.target;
                parent = element.parentElement 
                styles = window.getComputedStyle(element);
            }else{
                return 0
            }

            

            if(!element) return 0

         
            let cssArr = 
            [
                'width','height',
                'padding',
                'paddingTop','paddingLeft','paddingBottom','paddingRight',

                'margin',
                'marginTop','marginLeft','marginBottom','marginRight',

                'borderWidth',
                'borderTopWidth','borderLeftWidth','borderBottomWidth','borderRightWidth',
                'borderTopStyle','borderLeftStyle','borderBottomStyle','borderRightStyle',

                'borderRadius',
                'borderTopLeftRadius','borderTopRightRadius','borderBottomLeftRadius','borderBottomRightRadius',


            ]

            let cssImageArr =[
                'backgroundImage',
            ]
            

            // * element.style : camelCase
            // * Input Selecter : camelCase
            // * styles : kebab-case
            
            
            cssArr.forEach((item,i)=>{

                let camelCaseText = toCamelCase(item)
                let kebabCaseText = toKebabCase(item)


              try{
                if(!$(`#${item}`)[0].className.includes('selection')){

                    $(`#${camelCaseText}`).val(  element.style[camelCaseText] !== '' ? spVal(element.style[camelCaseText]).number : spVal(styles.getPropertyValue(`${kebabCaseText}`)).number );
                    $(`#unit-${camelCaseText}`).val(  element.style[camelCaseText] !== '' ? spVal(element.style[camelCaseText]).unit : spVal(styles.getPropertyValue(`${kebabCaseText}`)).unit );

                }else{
                    $(`#${camelCaseText}`).val(  element.style[camelCaseText] !== '' ? element.style[camelCaseText] : styles.getPropertyValue(`${kebabCaseText}`) );
                }
              }catch(e){
                console.log(e)
                console.log(kebabCaseText)
                console.error(item,styles.getPropertyValue(`${kebabCaseText}`))
              }

            })

            cssImageArr.forEach((item)=>{

                let camelCaseText = toCamelCase(item)
                let kebabCaseText = toKebabCase(item)

                $(`#${camelCaseText}`).val(!ishtml(getImageURL(styles.getPropertyValue(`${kebabCaseText}`))) ? getImageURL(styles.getPropertyValue(`${kebabCaseText}`)) : '' )
            })

          /*   console.log(element.style)
            
            console.log(styles.getPropertyValue(`${'background-color'}`))
 */ 
           /*  $('#borderColor').val(setColor(styles,'border-color')); */

            $('#borderTopColor').val($('#borderColor').val())
            $('#borderLeftColor').val($('#borderColor').val())
            $('#borderBottomColor').val($('#borderColor').val())
            $('#borderRightColor').val($('#borderColor').val())
            

            $('#backgroundColor').val(setColor(styles,'background-color'));
            $('#colorpicker-backgroundColor').val(setColor(styles,'background-color'));

            


        })

    
        let elemInput 
        $(window).on('mouseup mousemove mousedown change input',(e)=>{

            if(!element) return 0
            if(e.type === 'mousedown') elemInput = e.target

            //* SIZING --------------------------------------------------------------------------
            if(elemInput && elemInput.id === 'size'){

                element.style.width =   $('#size').val()+$('#unit-size').val()
                element.style.height =   $('#size').val()+$('#unit-size').val()

                $('#width').val( $('#size').val())
                $('#height').val( $('#size').val())

            }


            element.style.width =   $('#width').val()+$('#unit-width').val()
            element.style.height =   $('#height').val()+$('#unit-height').val()

       

            //* PADDING --------------------------------------------------------------------------
         
            if(elemInput && elemInput.id === 'padding'){

                element.style.paddingTop =   $('#padding').val()+$('#unit-padding').val()
                element.style.paddingLeft =   $('#padding').val()+$('#unit-padding').val()
                element.style.paddingBottom =   $('#padding').val()+$('#unit-padding').val()
                element.style.paddingRight =   $('#padding').val()+$('#unit-padding').val()

                $('#paddingTop').val($('#padding').val())
                $('#paddingLeft').val($('#padding').val())
                $('#paddingBottom').val($('#padding').val())
                $('#paddingRight').val($('#padding').val())
            }

            element.style.paddingTop =   $('#paddingTop').val()+$('#unit-paddingTop').val()
            element.style.paddingLeft =   $('#paddingLeft').val()+$('#unit-paddingLeft').val()
            element.style.paddingBottom =   $('#paddingBottom').val()+$('#unit-paddingBottom').val()
            element.style.paddingRight =   $('#paddingRight').val()+$('#unit-paddingRight').val()

            //* MARGIN --------------------------------------------------------------------------

        
         
            if(elemInput && elemInput.id === 'margin'){

                element.style.marginTop =   $('#margin').val()+$('#unit-margin').val()
                element.style.marginLeft =   $('#margin').val()+$('#unit-margin').val()
                element.style.marginBottom =   $('#margin').val()+$('#unit-margin').val()
                element.style.marginRight =   $('#margin').val()+$('#unit-margin').val()

                $('#marginTop').val($('#margin').val())
                $('#marginLeft').val($('#margin').val())
                $('#marginBottom').val($('#margin').val())
                $('#marginRight').val($('#margin').val())
            }

            element.style.marginTop =   $('#marginTop').val()+$('#unit-marginTop').val()
            element.style.marginLeft =   $('#marginLeft').val()+$('#unit-marginLeft').val()
            element.style.marginBottom =   $('#marginBottom').val()+$('#unit-marginBottom').val()
            element.style.marginRight =   $('#marginRight').val()+$('#unit-marginRight').val()

         //*--------------------------------------------------------------------------
    
         

         if(elemInput && elemInput.id === 'borderRadius'){

             element.style.borderTopLeftRadius       =   $('#borderRadius').val()+$('#unit-borderRadius').val()
             element.style.borderTopRightRadius      =   $('#borderRadius').val()+$('#unit-borderRadius').val()
             element.style.borderBottomLeftRadius    =   $('#borderRadius').val()+$('#unit-borderRadius').val()
             element.style.borderBottomRightRadius   =   $('#borderRadius').val()+$('#unit-borderRadius').val()

             $('#borderTopLeftRadius').val($('#borderRadius').val())
             $('#borderTopRightRadius').val($('#borderRadius').val())
             $('#borderBottomLeftRadius').val($('#borderRadius').val())
             $('#borderBottomRightRadius').val($('#borderRadius').val())
         }

         element.style.borderTopLeftRadius       =   $('#borderTopLeftRadius').val()+$('#unit-borderTopLeftRadius').val()
         element.style.borderTopRightRadius      =   $('#borderTopRightRadius').val()+$('#unit-borderTopRightRadius').val()
         element.style.borderBottomLeftRadius    =   $('#borderBottomLeftRadius').val()+$('#unit-borderBottomLeftRadius').val()
         element.style.borderBottomRightRadius   =   $('#borderBottomRightRadius').val()+$('#unit-borderBottomRightRadius').val()

            //*--------------------------------------------------------------------------


            if(elemInput && elemInput.name === 'border'){

                element.style.border =   `${$('#borderWidth').val()}px ${$('#borderStyle').val()} ${$('#borderColor').val()}`

                $('#borderTopWidth').val($('#borderWidth').val())
                $('#borderLeftWidth').val($('#borderWidth').val())
                $('#borderBottomWidth').val($('#borderWidth').val())
                $('#borderRightWidth').val($('#borderWidth').val())

                $('#borderTopStyle').val($('#borderStyle').val())
                $('#borderLeftStyle').val($('#borderStyle').val())
                $('#borderBottomStyle').val($('#borderStyle').val())
                $('#borderRightStyle').val($('#borderStyle').val())

                $('#borderTopColor').val($('#borderColor').val())
                $('#borderLeftColor').val($('#borderColor').val())
                $('#borderBottomColor').val($('#borderColor').val())
                $('#borderRightColor').val($('#borderColor').val())
            }

            element.style.borderTop =  `${$('#borderTopWidth').val()}px ${$('#borderTopStyle').val()} ${$('#borderTopColor').val()}`
            element.style.borderLeft =  `${$('#borderLeftWidth').val()}px ${$('#borderLeftStyle').val()} ${$('#borderLeftColor').val()}`
            element.style.borderBottom =  `${$('#borderBottomWidth').val()}px ${$('#borderBottomStyle').val()} ${$('#borderBottomColor').val()}`
            element.style.borderRight =  `${$('#borderRightWidth').val()}px ${$('#borderRightStyle').val()} ${$('#borderRightColor').val()}`


 /*            element.style.borderLeft `${$('#borderWidth').val()}px ${$('#borderStyle').val()} ${$('#borderColor').val()}`
            element.style.borderBottom =  `${$('#borderWidth').val()}px ${$('#borderStyle').val()} ${$('#borderColor').val()}`
            element.style.borderRight = `${$('#borderWidth').val()}px ${$('#borderStyle').val()} ${$('#borderColor').val()}` */


            //*--------------------------------------------------------------------------

           /*  let borderPropSide = $('#borderSide').val() 
                borderPropSide = borderPropSide === 'all' ? '' : capitalizeWord(borderPropSide)

            let borderPropWidth = `border${borderPropSide}Width`
            let borderPropColor = `border${borderPropSide}Color`
            let borderPropStyle = `border${borderPropSide}Style`

            element.style[borderPropColor] = $("#borderColor").val();
            element.style[borderPropStyle] = $("#borderStyle").val();
            element.style[borderPropWidth] = $("#borderWidth").val()+$("#unit-borderWidth").val(); */
            

            //*--------------------------------------------------------------------------

            if(e.type === 'input' && e.target.id === 'colorpicker-backgroundColor'){
                $("#backgroundColor").val($("#colorpicker-backgroundColor").val())
            }
            element.style.backgroundColor = $("#backgroundColor").val()

            element.style.backgroundRepeat = $("#backgroundRepeat").val()
          /*   element.style.backgroundSize = $("[name='backgroundSize']").val() */
            element.style.backgroundSize = `${$("#backgroundSize").val()}${$("#unit-backgroundSize").val()}`
            element.style.backgroundPosition = `${$("#backgroundPositionX").val()+$("#unit-backgroundPositionX").val()} ${$("#backgroundPositionY").val()+$("#unit-backgroundPositionY").val()}`

            if(e.target.type === 'file' && e.target.id === 'file-backgroundImage' && e.type === 'input'){
                $("#backgroundImage").val(e.target.files ? e.target.files[0].name : '')
                if(e.target.files[0]){

                    let url = `../Generator/image/${e.target.files[0].name}`
                    $("#backgroundImage").val(url)
                    element.style.backgroundImage = `url('${ $("#backgroundImage").val()}')`
                }
            }


            element.style.backgroundImage = `url('${ $("#backgroundImage").val()}')`
         

            /* backgroundColor 
            backgroundImage
            backgroundRepeat
            backgroundPosition
            backgroundSize
            backgroundAttachment
            backgroundOrigin
            backgroundClip
            backgroundBlendMode
            background */


       /*      if(elemInput && elemInput.id === 'select-boder-size'){
            
            } */



        })





  




});


