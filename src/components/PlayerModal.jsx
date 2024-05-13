/* eslint-disable react/prop-types */
import React from "react";

class PlayerModal extends React.Component {
  cancelBtn = () => {
    this.props.close();
  };

  changeCurrentData(type, isInc) {
    this.props.changeCurrentData(type, isInc);
  }
  saveChanges = () => {
    this.props.saveChanges();
  };
  componentWillUnmount = () => {
    this.props.clearPlayerModal();
  };

  addPlayerName = (e, type) => {
    this.props.addPlayerName(e, type);
  };
//   addPlayerClub = (e) => {
//     this.props.addPlayerClub(e)
//   }

  render() {
    const { currentData } = this.props;
    return (
      <div className="card">
        <div className="card-header m-20">➕Add Player </div>
        <div className="card-body">
          <div className="row">
            <div className="col-5">
              <h5>Player`s Age</h5>
              <div className="btn-group">
                <button
                  className="btn btn-dark"
                  onClick={() => this.changeCurrentData("age", false)}
                >
                  -
                </button>
                <button className="btn">
                  {currentData ? currentData.age : 0}
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => this.changeCurrentData("age", true)}
                >
                  +
                </button>
              </div>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCOhlDPfU6gLkm_yHxa68ja7X2mvjFs9U4KA&s"
              alt=""
            />
            <div className="col-5">
              <h5>Player`s Value</h5>
              <div className="btn-group">
                <button
                  className="btn btn-dark"
                  onClick={() => this.changeCurrentData("value", false)}
                >
                  -
                </button>
                <button className="btn">
                  💲{currentData ? currentData.value : 0}.00m
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => this.changeCurrentData("value", true)}
                >
                  +
                </button>
              </div>
            </div>
            <hr/>
            <form>
              <div className="form-row">
                <div className="col">
                    <label htmlFor="name">Player name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter player name"
                    onChange={(e) => this.addPlayerName(e, "name")}
                  />
                </div>
                <div>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUauuvp6cNIzi6OiO0Dm971ij4CsF88bheQ&s" alt="" className="ballImg"/>
                </div>
                <div className="col">
                    <label htmlFor="club">Player club</label>
                  <input
                    name="club"
                    type="text"
                    className="form-control"
                    placeholder="Enter player club"
                    onChange={(e) => this.addPlayerName(e, "club")}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card-footer">
          <button className="btn btn-warning m-2" onClick={this.cancelBtn}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={this.saveChanges}>
            Save changes
          </button>
        </div>
      </div>
    );
  }
}
export default PlayerModal;
