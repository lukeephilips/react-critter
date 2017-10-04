import React from "react"
class CreateCritter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("ding dong")
    this.props.handleCreate(this.input.value);
    this.input.value = ""
  }
  render(){
    return (
      <div>
          <input className="form-control" type="text" placeholder="Enter a name"
          ref={(input) => this.input = input} />
          <button onClick={this.handleSubmit}>Create</button>
      </div>
    )
  }
}
export default CreateCritter;
