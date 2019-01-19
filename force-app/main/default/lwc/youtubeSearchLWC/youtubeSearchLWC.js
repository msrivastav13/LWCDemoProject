import { LightningElement, track } from 'lwc';
import youtubesearch from '@salesforce/apex/Youtubesearch.search';


export default class YoutubeSearch extends LightningElement {
    @track items = [];
    @track error;

    async handleSearch(event) {
        try {
            const searchResults = await youtubesearch({searchstr: event.detail});
            this.items = searchResults.items;
        } catch(exception) {
            this.error = exception;
        }
        
    }
}