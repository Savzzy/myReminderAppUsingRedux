import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder ,deleteReminder} from '../action';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
         } 
    }

    addReminder(){
        console.log('this',this);
        this.props.addReminder(this.state.text);
    }
    deleteReminder(id){
        console.log("deleting reminder" ,id);
    }
    renderReminders(){
        const { reminders } = this.props;
       return(
           <ul className="list-group col-sm-4">
           {
               reminders.map(reminder=> {
                   return(
                       <li key={reminder.id} className="list-group-item">
                       <div>{reminder.text}</div>
                       <div className="list-item delete-button"
                       onClick={()=>this.deleteReminder(reminder.id)}
                       >
                       &#x2715;
                       </div>
                       </li>
                   )
               })
           }
           </ul>
       )
    }
    render() {
        return (
            <div className="App">
                <div className="Title">
                    My Reminder App
                </div>
                <div className="form-inline reminder-form" >
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to ..."
                            onChange={event=> this.setState({text:event.target.value})}
                        />
                    </div>
                    
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addReminder()}
                        >Add Reminder</button>
                        
                </div>
                {this.renderReminders()}
                

            </div>
        )
    }
}


function mapStateToProps(state){
return{
    reminders:state
}
}
export default connect(mapStateToProps,{ addReminder ,deleteReminder })(App);


