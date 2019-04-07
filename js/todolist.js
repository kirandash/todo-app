// Create List of TO DO tasks
var ToDoList = React.createClass({
    getInitialState: function(){
        return {
            tasks: []
        }
    },
    componentWillMount: function(){
        var self = this;
        if(this.props.count){
            // jQuery getJSON to get JSON from an api
            $.getJSON("http://baconipsum.com/api/?type=all-meat&sentences=" + this.props.count + "&start-with-lorem=1&callback=?", function(results){
                // Callback fn
                results[0].split('. ').forEach(function(sentence){
                    self.addToList(sentence.substring(0, 40));
                })
            });
        }
    },
    addToList: function(newText){
        var tasksArr = this.state.tasks;
        tasksArr.push(newText); // Updating the item at i index
        this.setState({tasks: tasksArr}); // Updating the existing tasks list
    },
    editList: function(newText, i){
        var tasksArr = this.state.tasks;
        tasksArr[i] = newText; // Updating the item at i index
        this.setState({tasks: tasksArr}); // Updating the existing tasks list
    },
    deleteFromList: function(i){
        var tasksArr = this.state.tasks;
        tasksArr.splice(i, 1); // Deleting an item from index i
        this.setState({tasks: tasksArr}); // Updating the existing tasks list
    },
    eachTask: function(task, i){
        // Each tasks moved from render to a new function to keep render function simpler with less code
        return (
            <ToDo index={i} onEdit={this.editList} onDelete={this.deleteFromList}>{task}</ToDo>
        );
    },
    render: function() {
        return (
            <div className="todo-list">
                {this.state.tasks.map(this.eachTask)}
                <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.addToList.bind(null, "New Task")}></button> 
            </div>
        ) /* The bind event is to pass default placeholder for the first time we add a task */
    }
});