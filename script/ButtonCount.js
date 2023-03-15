class ButtonCount extends HTMLElement{
    constructor(){
        super();
        //Create a new shadow root for the component
        const shadowRoot = this.attachShadow({mode: 'open'});
        const template = document.createElement('template');
        template.innerHTML = `
        <button><slot>Times Clicked: 0</slot></button>
        `;
        shadowRoot.appendChild(template.content.cloneNode(true));
        
        const button = shadowRoot.querySelector("button");
        let count = 0;
        button.addEventListener('click',()=>{
            count++;
            button.textContent=`Times Clicked: ${count}`;
        });
    }
}
customElements.define('button-count', ButtonCount);