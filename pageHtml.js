

    // Your code here...


    const page = new Page(tabHtml)
    
    const sectionSizing = new Section("Sizing",
    [
        new Input('number',{id:'size',name:'size',label:'size',showUnit:false}).element(),
        new Input('text',{id:'width',name:'width',label:'W'}).element(),
        new Input('text',{id:'height',name:'height',label:'H'}).element(),
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
                new Input('text',{id:'backgroundPositionX',name:'backgroundPositionX',max:5000,min:-5000}).element(),
                new Input('text',{id:'backgroundPositionY',name:'backgroundPositionY',max:5000,min:-5000}).element(),

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

            new InputGroup('background Size',[ 
                ,
                                new Input('text',{id:'backgroundSizeWidth',name:'backgroundSizeWidth',max:5000,min:-5000}).element(),
                                new Input('text',{id:'backgroundSizeHeight',name:'backgroundSizeHeight',max:5000,min:-5000}).element(),
                
         ]).element(),

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

    
    const sectionDisplay = new Section("Display",
    [
        new Selection (
            {id:'display',name:'display',label:'type'},
            {
                '': '',
                'none': 'none',
                'block': 'block',
                'inline': 'inline',
                'inline-block': 'inline-block',
                'flex': 'flex',
                'grid': 'grid',
                'inline-flex': 'inline-flex',
                'inherit': 'inherit',
                'initial': 'initial',
                'unset': 'unset',
            }
            ).element(),
            new Input('number',{id:'opacity',name:'opacity',placeholder:'opacity', label:'opacity' ,step:1,max:100,min:0,cssUnit:['%']}).element(),

            
            new InputGroup('flex',[ 

                new Selection (
                    {id:'flexDirection',name:'flexDirection',label:'flexDirection'},
                    {
                        '': '',
                        'row': 'row ',
                        'row-reverse': 'row-reverse',
                        'column': 'column',
                        'column-reverse': 'column-reverse',
                    }
                    ).element(),

                new Selection (
                    {id:'alignItems',name:'alignItems',label:'alignItems'},
                    {
                        '': '',
                        
                        'normal': 'normal',
                        'stretch': 'stretch',
                        'flex-start': 'flex-start',
                        'center': 'center',
                        'flex-end': 'flex-end',
                        'baseline': 'baseline',
                    }
                    ).element(),

                new Selection (
                    {id:'justifyContent',name:'justifyContent',label:'justifyContent'},
                    {
                        '': '',
                        'normal': 'normal',
                        'flex-start': 'flex-start',
                        'center': 'center',
                        'flex-end': 'flex-end',
                        'space-between': 'space-between',
                        'space-around': 'space-around',
                        'space-evenly': 'space-evenly',
                    }
                    
                    ).element(),
                    new Input('number',{id:'gap',name:'gap',placeholder:'gap', label:'gap' ,min:0}).element(),

                    new Input('number',{id:'flexGrow',name:'flexGrow',label:'flex Grow',placeholder:'flexGrow',max:5000,min:-5000}).element(),
                    new Input('number',{id:'flexShrink',name:'flexShrink',label:'flex Shrink',placeholder:'flexShrink',max:5000,min:-5000}).element(),
                    new Input('number',{id:'flexBasis',name:'flexBasis',label:'flex Basis',placeholder:'flexBasis',max:5000,min:-5000}).element(),

                    new Selection (
                        {id:'flexWrap',name:'flexWrap',label:'flexWrap'},
                        {
                            '': '',
                            'nowrap': 'nowrap',
                            'wrap': 'wrap',

                        }
                        
                        ).element(),

              ],'col').element(),


            
    ])


    const sectionPosition = new Section("Position",
    [
        new Selection(
            {id:'side',name:'side',label:'Side'},
            {
                '': '',
                'static': 'static',
                'relative': 'relative',
                'absolute': 'absolute',
                'fixed': 'fixed',
                'sticky': 'sticky'}
            ).element(),
    ])


    page.pageContent = [
        sectionSizing.element(),
        sectionBackground.element(),
        sectionDisplay.element(),
        sectionPosition.element(),
        sectionPadding.element(),
        sectionMargin.element(),
        sectionBorderRadius.element(),
        sectionBorder.element(),
    ]
    
    tabHtml.addPage(panelBody,page)


    //*---------------------------------------------------------------------------------------------


    function splitValue(value) {
        const match = value.split(/(-?\d+)(\D+)/);
        if( match){
            return {
                number: parseFloat(match[1]),
                unit: match[2]
            };
        }else{
            return {
                number: null,
                unit: null
            };
        }
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

      function setNumberValue(cssPropName){
        let camelCaseText = toCamelCase(cssPropName)
        let kebabCaseText = toKebabCase(cssPropName)

        let value = element.style[camelCaseText] || styles.getPropertyValue(kebabCaseText)
        
        if(spVal(value).number === null || isNaN(spVal(value).number)){
            return {
                number : '',
                unit : 'px'
            }
        }

        return spVal(value)

      }


      //*--------------------------------------------------------------------------------------------------
      //*--------------------------------------------------------------------------------------------------
      //*--------------------------------------------------------------------------------------------------


      let element, parent ,styles

      let spVal =  splitValue

    function initValue(e, elem){

        if(e){

                if((!hasParentWithName(e.target) && e.target.tagName !== "HTML")){
                    element = e.target;
                    parent = element.parentElement 
                    styles = window.getComputedStyle(element);
            }else{
                return 0
            }

        }else{
            element = elem
            parent = element.parentElement 
            styles = window.getComputedStyle(element);
            
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

            'borderRadius',
            'borderTopLeftRadius','borderTopRightRadius','borderBottomLeftRadius','borderBottomRightRadius',

            'backgroundPositionX','backgroundPositionY',
            'gap',
        ]

        let cssImageArr =[
            'backgroundImage',
        ]

        let cssString = [
            'display','flexDirection','alignItems','justifyContent',
            'borderTopStyle','borderLeftStyle','borderBottomStyle','borderRightStyle',
            'flexWrap'

        ]
        

        // * element.style : camelCase
        // * Input Selecter : camelCase
        // * styles : kebab-case
        
        
        cssArr.forEach((item,i)=>{

            let camelCaseText = toCamelCase(item)
            let kebabCaseText = toKebabCase(item)


          try{

                $(`#${camelCaseText}`).val(   setNumberValue(item).number );
                $(`#unit-${camelCaseText}`).val(  setNumberValue(item).unit );

               /*  console.log(item,styles[camelCaseText]) */

          }catch(e){
            console.log(e)
            console.log(kebabCaseText)
            console.error(item,styles[kebabCaseText])
          }

        })

        cssImageArr.forEach((item)=>{

            let camelCaseText = toCamelCase(item)
            let kebabCaseText = toKebabCase(item)

            
            $(`#${camelCaseText}`).val(!ishtml(getImageURL(styles[kebabCaseText])) ? getImageURL(styles[kebabCaseText]) : '' )
        })

        cssString.forEach((item)=>{
            
            
            let camelCaseText = toCamelCase(item)
            let kebabCaseText = toKebabCase(item)
            $(`#${camelCaseText}`).val(element.style[camelCaseText] || styles[kebabCaseText])

            

        })

      

        $('#opacity').val(element.style.opacity*100 || styles.getPropertyValue('opacity')*100)

        $('#borderTopColor').val($('#borderColor').val())
        $('#borderLeftColor').val($('#borderColor').val())
        $('#borderBottomColor').val($('#borderColor').val())
        $('#borderRightColor').val($('#borderColor').val())
        

        $('#backgroundColor').val(setColor(styles,'background-color'));

        
        console.log(element.style.backgroundSize , styles.getPropertyValue('backgroundSize'))

        
        $("#flexBasis").val(setNumberValue('flexBasis').number)
        $("#flexDirection").val(setNumberValue('flexDirection').number)
        $("#flexFlow").val(setNumberValue('flexFlow').number)
        $("#flexGrow").val(setNumberValue('flexGrow').number)
        $("#flexShrink").val(setNumberValue('flexShrink').number)


        $('#backgroundSizeWidth').val();
        $('#backgroundSizeHeigth').val();

        $('#colorpicker-backgroundColor').val(setColor(styles,'background-color'));

      }

        $(window).click(e=>{
            
          

        })

        
    
        let elemInput 

        $('body:not(.panel > *)').click(e=>{
            let link = e.target.dataset.link

            initValue(e)

            $(".layer-item").removeClass('hl-layer')
            $(`[data-linkto=${link}]`).addClass('hl-layer')

            $(".hl-element").removeClass('hl-element')
            e.target.classList.add('hl-element')
            
        })

        $(window).on('mouseup mousemove mousedown change input wheel',(e)=>{



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
            element.style.backgroundSize = `${$("#backgroundSizeWidth").val()}${$("#unit-backgroundSizeWidth").val() } ${$("#backgroundSizeHeight").val()}${$("#unit-backgroundSizeHeight").val() }`
            element.style.backgroundPositionX = `${$("#backgroundPositionX").val()+$("#unit-backgroundPositionX").val()}`
            element.style.backgroundPositionY = `${$("#backgroundPositionY").val()+$("#unit-backgroundPositionY").val()}`


            if(e.target.type === 'file' && e.target.id === 'file-backgroundImage' && e.type === 'input'){
                $("#backgroundImage").val(e.target.files ? e.target.files[0].name : '')
                if(e.target.files[0]){

                    let url = `../Generator/image/${e.target.files[0].name}`
                    $("#backgroundImage").val(url)
                    element.style.backgroundImage = `url('${ $("#backgroundImage").val()}')`
                }
            }


            element.style.backgroundImage = `url('${ $("#backgroundImage").val()}')`

            //*--------------------------------------------------------------------------
         

            element.style.display = $("#display").val()
            element.style.opacity = $("#opacity").val()+'%'
            element.style.flexDirection = $("#flexDirection").val()
            element.style.alignItems = $("#alignItems").val()
            element.style.justifyContent = $("#justifyContent").val()

            element.style.flexBasis = $("#flexBasis").val()+$("#unit-flexBasis").val()
            element.style.flexDirection = $("#flexDirection").val()
            element.style.flexFlow = $("#flexFlow").val()
            element.style.flexGrow = $("#flexGrow").val()
            element.style.flexShrink = $("#flexShrink").val()



            element.style.gap = $("#gap").val()+$("#unit-gap").val()



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





  




