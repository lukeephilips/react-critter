import React from "react"
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
class CreateCritter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleCreate(this.input.value, this.select.value);
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
                <Button className="btn btn-success" onClick={this.handleSubmit}>Create</Button>
            </span>
          </div>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Pick a species</ControlLabel>
            <FormControl componentClass="select" inputRef={ref => { this.select = ref; }}>
              <option value="blackCat">Mittins</option>
              <option value="chicken">Peeps</option>
              <option value="frog">Hoppy</option>
              <option value="octopus">Floppy</option>
              <option value="shark">Finn</option>
            </FormControl>
          </FormGroup>
        </div>
      </div>
    )
  }
}
export default CreateCritter;
