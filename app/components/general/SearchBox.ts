class SearchBoxViewModel {
    public name: string;
    public message: string;

    constructor() {
        this.name = "search-box";
        this.message = "Search clicked - contructor value."
    }

    public props = {
        
    }

    public data() {
        return {message: this.message};
    }

    public methods = {
        searchClicked: () => { 
            //alert(this.props.message); 
            console.log(this.message);
        }
    }

    components = {}
}
export default new SearchBoxViewModel();