import { LightningElement, api,track } from 'lwc';

export default class LearnLWC extends LightningElement {

    @track hour = 1;
    add = "ADD TO DO"
    inputValue;
    @track greet = "";
    @track inputvalue = '';
    @track items = [];

    connectedCallback()
    {
        this.greetMessage();
        this.items = JSON.parse(localStorage.getItem('myArray')) || [];
    }

    changeHandler(event)
    {
        this.inputValue = event.target.value;
    }

    clickHandler()
    {
        this.items = [...this.items, this.inputValue];
        localStorage.setItem('myArray', JSON.stringify(this.items));
        this.inputValue = '';        
    }

    greetMessage()
    {   
       const d = new Date();
       this.hour = d.getHours();
       if(this.hour > 12)
       {
        this.greet = "Afternoon";
       }
       else
       {
        this.greet = "Morning";
       }
       return this.greet;
    }
    
    deleteItem(event)
    {
        const value = event.target.dataset.value;
        this.items = this.items.filter(val => val !== value);
    }
}