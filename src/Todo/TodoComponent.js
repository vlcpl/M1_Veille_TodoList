import React, {Component} from 'react';

class TodoComponent extends Component{
    constructor(){
        super();
        this.state={
            userInput:'',
            items:[],
        }
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addInList(event){
        event.preventDefault(); //Pour éviter que la page ne se recharge quand le bouton est cliqué
        this.setState({
            items: [...this.state.items, this.state.userInput],
            userInput: '',
        });
    }

    deleteFromList(item){
        //event.preventDefault();
        const newItems = this.state.items;
        const indexToDelete = newItems.indexOf(item);
        newItems.splice(indexToDelete, 1);
        this.setState({
            items: newItems
        });
    }

    renderList(){
        return this.state.items.map((item)=>{
            return(
                <div key={item}>
                    {item} <button onClick={this.deleteFromList.bind(this, item)}>Supprimer de la liste</button>
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                <h1>Todo List</h1>
                <form>
                    <input
                        value={this.state.userInput}
                        type="text"
                        placeholder="Nouvelle tâche à effectuer"
                        onChange={this.onChange.bind(this)}
                    />
                    <button onClick={this.addInList.bind(this)}>Ajouter une nouvelle tâche</button>
                </form>
                <div>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default TodoComponent;