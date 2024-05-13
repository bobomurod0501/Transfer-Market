import React from "react";
import PlayerModal from "../components/PlayerModal";

class App extends React.Component {
  state = {
    players: [],
    modalVisibility: false,
    currentData: "",
  };

  componentDidMount() {
    const players = [
      {
        name: "Mbappe",
        age: 23,
        club: "PSJ",
        value: 160,
      },

      {
        name: "Salah",
        age: 29,
        club: "Leverpool",
        value: 150,
      },
      {
        name: "Lukaku",
        age: 28,
        club: "Chelsea",
        value: 100,
      },
      {
        name: "Neymar",
        age: 30,
        club: "PSJ",
        value: 120,
      },
    ];
    this.setState({
      players: players,
    });
  }

  removePlayer(index) {
    const player = this.state.players;
    player.splice(index, 1);
    this.setState({
      players: player,
    });
  }

  openModal = () => {
    this.setState({
      modalVisibility: true,
    });
  };
  closeModal = () => {
    this.setState({
      modalVisibility: false,
    });
  };

  changeCurrentData = (type, isInc) => {
    const newCurrentData = this.state.currentData
      ? this.state.currentData
      : { name: "none", age: 0, club: "none", value: 0 };

    if (type === "age") {
      if (isInc) {
        newCurrentData.age++;
      } else if (newCurrentData.age < 1) {
        newCurrentData.age = 0;
      } else {
        newCurrentData.age--;
      }
    }
    if (type === "value") {
      if (isInc) {
        newCurrentData.value++;
      } else if (newCurrentData.value < 1) {
        newCurrentData.value = 0;
      } else {
        newCurrentData.value--;
      }
    }

    this.setState({
      currentData: newCurrentData,
    });
  };

  clearPlayerModal = () => {
    this.setState({
      currentData: "",
    });
  };

  addPlayerName = (e, type) => {
    const newCurrentData = this.state.currentData
      ? this.state.currentData
      : { name: "none", age: 0, club: "none", value: 0 };
    if (type === "name") {
      newCurrentData.name = e.target.value;
    }
    if (type === "club") {
      newCurrentData.club = e.target.value;
    }
    this.setState({
      currentData: newCurrentData,
    });
  };
  // addPlayerClub = (e) => {
  //   const newCurrentData = this.state.currentData
  //     ? this.state.currentData
  //     : { name: "none", age: 0, club: "none", value: 0 };
  //   newCurrentData.club = e.target.value
  //   this.setState({
  //     currentData:newCurrentData,
  //   })
  // };

  saveChanges = () => {
    const { players, currentData } = this.state;
    players.push(currentData);
    this.setState({
      players,
      modalVisibility: false,
    });
  };

  render() {
    const { players, modalVisibility, currentData } = this.state;
    return (
      <div className="container ">
        <h1 className="title">⚽ TRANSFER market</h1>
        <button className="btn btn-dark" onClick={this.openModal}>
          Add a player
        </button>
        {modalVisibility ? (
          <PlayerModal
            close={this.closeModal}
            currentData={currentData}
            changeCurrentData={this.changeCurrentData}
            saveChanges={this.saveChanges}
            clearPlayerModal={this.clearPlayerModal}
            addPlayerName={this.addPlayerName}
            addPlayerClub={this.addPlayerClub}
          />
        ) : (
          ""
        )}
        <div className="market">
          <div className="row">
            <div className="col">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Club</th>
                    <th>Market value</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.club}</td>
                      <td>
                        💲
                        <span className="badge badge-primary">
                          {item.value}.00m
                        </span>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => this.removePlayer(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
