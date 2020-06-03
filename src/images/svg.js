import theme from '../themes/theme.js'
const white = '#fff'

export const svg = {

roof:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139.34 48.1"><defs><style>.cls-1{fill:${white};stroke:#fff;stroke-miterlimit:10;fill-rule:evenodd;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M119.87,41.66h-7V34h7ZM128.66,34v7.71h-7V34Zm-8.79-1.46h-6.63l3.57-4.4,3.06-3.77Zm1.78-8.17,3.06,3.77,3.57,4.4h-6.63ZM16.15,41.66h-7V34h7ZM24.94,34v7.71h-7V34Zm-8.79-1.46H9.52l3.57-4.4,3.06-3.77Zm1.78-8.17L21,28.09l3.57,4.4H17.93Zm50.54,7.79H61.18c.53-3.1,3.51-5.55,7.29-6Zm-7.29,2V44.15h7.29V34.08Zm9.69,6v4.09h7.3V34.09h-7.3Zm0-13.93c3.78.43,6.77,2.88,7.3,6h-7.3ZM.5,17.49H52.19V5.62h-3v-3H62.64v3h-3v5.91l8.16-8.79,1.86-2,1.86,2L85.21,17.49h53.63V47.6H107.27L91.8,30.92,71.53,9.07l-1.86-2-1.86,2L47.55,30.92,32.07,47.6H.5Z"/></g></g></svg>`,
home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.94 242.58"><defs><style>.cls-1{fill:${theme.mainColor};}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" x="176.1" y="118.24" width="18.53" height="18.53"/><rect class="cls-1" x="150.69" y="118.24" width="18.53" height="18.53"/><rect class="cls-1" x="150.69" y="143.65" width="18.53" height="18.53"/><rect class="cls-1" x="176.1" y="143.65" width="18.53" height="18.53"/><path class="cls-1" d="M172.81,0,77.45,64.41h47.13l48.23-32.58,86.75,58.6V216.2H86.07V134h6v-.36A27.17,27.17,0,0,1,103,111.85l.09-.08a8.4,8.4,0,0,1,10.06,0l6.75,5h10.85V81.55H119.91l-6.75,5.06a8.4,8.4,0,0,1-10.06,0l-5.32-4-5.67-4.24a108.49,108.49,0,0,0-14.66-.9v-.06h-.16a123.22,123.22,0,0,0-17.6,1.24v.07C37.16,82,9.54,93,0,126c.65-.75,24.9-28.72,45.6-19.43C50.28,108.69,54,114.89,54,120V134h5.7V242.58H285.94V76.41Z"/></g></g></svg>`

}

export const homeSVG = (cls, color) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.94 242.58"><defs><style>.${cls}{fill:${color};}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="${cls}" x="176.1" y="118.24" width="18.53" height="18.53"/><rect class="${cls}" x="150.69" y="118.24" width="18.53" height="18.53"/><rect class="${cls}" x="150.69" y="143.65" width="18.53" height="18.53"/><rect class="${cls}" x="176.1" y="143.65" width="18.53" height="18.53"/><path class="${cls}" d="M172.81,0,77.45,64.41h47.13l48.23-32.58,86.75,58.6V216.2H86.07V134h6v-.36A27.17,27.17,0,0,1,103,111.85l.09-.08a8.4,8.4,0,0,1,10.06,0l6.75,5h10.85V81.55H119.91l-6.75,5.06a8.4,8.4,0,0,1-10.06,0l-5.32-4-5.67-4.24a108.49,108.49,0,0,0-14.66-.9v-.06h-.16a123.22,123.22,0,0,0-17.6,1.24v.07C37.16,82,9.54,93,0,126c.65-.75,24.9-28.72,45.6-19.43C50.28,108.69,54,114.89,54,120V134h5.7V242.58H285.94V76.41Z"/></g></g></svg>`
}

export const mobileMenuIcon = (color) => {
    return `<svg fill="${color}" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>`
}

export const newLogo = (color) => {
    const cls1 = "cls-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const cls2 = "cls-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.68 91.15"><defs><style>.${cls1}{font-size:36px;font-family:HelveticaNeue-Bold, Helvetica Neue;letter-spacing:0.1em;}.${cls1},.${cls2}{fill:${color};font-weight:700;}.${cls2}{font-size:10px;font-family:HelveticaNeue-CondensedBold, Helvetica Neue;letter-spacing:0.7em;}</style></defs><title>[Practical Renovations]</title><g id="Layer_2" data-name="Layer 2"><g id="Logo_7" data-name="Logo 7"><g id="_Your_Text_Here_" data-name="[Practical Renovations]"><text class="${cls1}" transform="translate(54.98 30.85)">Practical<tspan x="-34.65" y="36">Renovations</tspan></text><text class="${cls2}" transform="translate(130.67 86.29)">LLC</text></g></g></g></svg>`
}