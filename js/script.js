var ToDo = React.createClass({
    render: function() {
        return (
            <div className="todo">
                <h3>{this.props.children}</h3>
                <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}></button>
                <button className="btn btn-warning glyphicon glyphicon-trash" onClick={this.delete}></button>
            </div>
        )
    },
    edit: function() {
        console.log('Editing task');
    },
    delete: function() {
        console.log('Task deleted!');
    }
});

React.render(<ToDo>To do task</ToDo>, document.getElementById('react-component'));