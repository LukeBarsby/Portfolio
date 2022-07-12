class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '


                    <p class="sidebar-p">Suck my wiggly dick. </p>
                

        '
    }
}

customElements.define('My-Header', MyHeader)