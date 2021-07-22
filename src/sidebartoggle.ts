import * as domQuery from 'htmlrapier/src/domquery';

/**
 * This class toggles bootstrap sidebars when an element has a data-toggle="sidebar" attribute on 
 * it. Use data-target="#wrapper" where #wrapper is the query you want to use to find the wrapper to toggle.
 */
export class SidebarMenuToggle{
    private target:HTMLElement;

    constructor(toggleElement){
        var targetName = toggleElement.getAttribute("data-target");
        this.target = <HTMLElement>domQuery.first(targetName);
        toggleElement.onclick = evt => this.toggle(evt);
    }

    toggle(evt){
        evt.preventDefault();
        if(this.target.classList.contains("toggled")){
            this.target.classList.remove("toggled");
        }
        else{
            this.target.classList.add("toggled");
        }
    }
}

/**
 * Activate any toggles that can be automatically activated.
 */
export function activate(){
    var elements = domQuery.all('[data-toggle=sidebar]');
    elements.forEach(i =>{
        new SidebarMenuToggle(i);
    });
}