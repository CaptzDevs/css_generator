
const panelCss = new Panel('300px','90vh','Panel',{top:'20px',right:'20px'})

panelCss.render()

const tabHtml = new Tab('html',' <i class="fa-solid fa-code"></i>')
const tabCss = new Tab('css','<i class="fa-solid fa-sparkles"></i>')
const tablayer = new Tab('Layer','<i class="fa-solid fa-layer-group"></i>')

tabCss.isHL = true
panelCss.addTab([tabHtml,tabCss,tablayer])







