import React from "react"
class CreateCritter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleCreate(this.input.value);
    this.input.value = ""
  }
  render(){
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="input-group">
              <input className="form-control" type="text" placeholder="Create a new critter"
                ref={(input) => this.input = input} />
            <span className="input-group-btn">
                <button className="btn btn-success" onClick={this.handleSubmit}>Create</button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
export default CreateCritter;
