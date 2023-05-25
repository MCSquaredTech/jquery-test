import { BaseElement } from "./base-element.js";

export class Image extends BaseElement { 
    constructor(file, altTag, cls='') { 
        super(); 
        this.file = file; 
        this.altTag = altTag;
        this.cls = cls;
    }


    getElementString() { 
        return `
        <img style="width: 10%;" class=${this.cls} src=${this.file} alt=${this.altTag}>
        `;
    }
}