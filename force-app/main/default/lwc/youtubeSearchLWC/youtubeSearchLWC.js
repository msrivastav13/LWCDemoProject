import { LightningElement, track } from 'lwc';
import youtubesearch from '@salesforce/apex/Youtubesearch.search';


export default class YoutubeSearch extends LightningElement {
    
    @track items = [];
    @track error;

    handleSearch(event){
        youtubesearch({searchstr: event.detail})
        .then(result => {
            this.items = result.items;
        })
        .catch(error => {
            // TODO Error handling
            this.error = error;
        });
    }

    /*async handleSearch(event) {
        try {
            const searchResults = await youtubesearch({searchstr: event.detail});
            this.items = searchResults.items;
        } catch(exception) {
            this.error = exception;
        }
        
    }*/
}