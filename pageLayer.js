


const pageLayer = new Page()
const pageLayer2 = new Page()


    
    let layerMap = []

    let maxLvlNode = 0

    function printHTMLMap(element, indent = '', excludedTags = [],excludedClasses = [],level = 0,parent = null) {
        const tagName = element.tagName.toLowerCase();
        const classNames = element.className.split(' ');
  
        let LINK = (Math.random() + 1).toString(36).substring(2);

        if(tagName === 'html'){
          LINK = null
        }

          element.dataset.link = LINK

       if (excludedTags.includes(tagName) || classNames.some(className => excludedClasses.includes(className))) {
            return; // Exclude specified tags and classes
        }
      
        /* console.log(indent + tagName+" | ",element.className,"Lvl : "+level); */
        const children = element.children;
        


        layerMap.push(new LabelLayer(element,level,LINK,parent).element())
   
        for (let i = 0; i < children.length; i++) {
          printHTMLMap(children[i], indent + '  ', excludedTags,excludedClasses,level+1,LINK);
        }

        if(level < Infinity && level > maxLvlNode){
            maxLvlNode = level
        }
      }
      


      function renderLayerMap(){

        if(panelLayer.tabs['layer'].pages[0]){
          panelLayer.tabs['layer'].pages[0].remove() 
        }
        
        const sectionSizing2 = new Section("Layer Map",layerMap)

        const htmlElement = document.querySelector('html');
        const excludedTags = ['script','head'];
        const excludedClasses = ['panel'];
  
        printHTMLMap(htmlElement, '', excludedTags,excludedClasses);

        
        pageLayer.pageContent = [
          sectionSizing2.element(),
        ]

        pageLayer2.pageContent = [
          sectionSizing2.element(),
        ]
      
  
      tablayer.addPage(pageLayer)
      tablayer2.addPage(pageLayer2)

      

      layerMap = []
      $('.layer-item').click((e)=>{
          let link = e.target.dataset.linkto
   
          if(link !== 'null'){
            let selectedLayer = $(`[data-link=${link}]`)
            
            initValue(false,selectedLayer[0])
            
            $(".layer-item").removeClass('hl-layer')
  
            e.target.classList.add('hl-layer')
            
            $(".hl-element").removeClass('hl-element')
            
            selectedLayer.addClass('hl-element')
            
          }
  
  
      })
      }

      renderLayerMap()



