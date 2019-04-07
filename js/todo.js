var ToDo = React.createClass({
    getInitialState: function(){
        // Allows us to set a default state for our node
        return {editing: false} // Initially we want the default card 
    },
    componentDidMount: function(){
        // Immediately after our component is rendered - Create draggable items of todo with jQuery UI
        $(this.getDOMNode()).draggable();
    },
    render: function() {
        if(this.state.editing){
            // On clicking edit render the form
            return this.renderEditCard();
        }else{
            // Initially render the default card
            return this.renderDefaultCard();
        }
    },
    renderDefaultCard: function() {
        return (
            <div className="todo">
                <h3>{this.props.children}</h3>
                <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}></button>
                <button className="btn btn-warning glyphicon glyphicon-trash" onClick={this.delete}></button>
            </div>
        )
    },
    renderEditCard: function() {
        return (
            <div className="todo">
                <textarea defaultValue={this.props.children} ref="savedText" className="form-control"></textarea>
                <button className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" onClick={this.save}></button>
            </div>
        )
    },
    edit: function() {
        console.log('Editing task');
        this.setState({editing: true});
    },
    save: function() {
        console.log('Task saved');
        var txt = this.refs.savedText.getDOMNode().value;
        console.log('The saved text is ' + txt);
        this.props.onEdit(this.refs.savedText.getDOMNode().value, this.props.index); // Call onEdit event from TODOList
        this.setState({editing: false});
    },
    delete: function() {
        console.log('Task deleted!');
        this.props.onDelete(this.props.index); // Call onDelete event from TODOList
    }
});