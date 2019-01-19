import { LightningElement, track } from 'lwc';

export default class SearchTerm extends LightningElement {

    @track searchString;

    handleKeyChange(event) {
        this.searchString = event.target.value;
    }

    handleClick(){
        const searchEvent = new CustomEvent('search', { detail:  this.searchString});
        this.dispatchEvent(searchEvent);
    }   

}