import React from 'react';
import { PeopleFromServer } from './people';
import { PeopleList } from './PeopleList';

class App extends React.Component {
  state = {
    isPeopleLoaded: false,
    people: PeopleFromServer,
  };

  loadPeople = () => {
    this.setState({
      isPeopleLoaded: true,
    });
  }

  reversePeople = () => {
    this.setState(prevState => ({
      people: [...prevState.people].reverse(),
    }));
  }

  render() {
    const { isPeopleLoaded, people } = this.state;

    return (
      <div className="App">
        <h1>People table</h1>
        {
          isPeopleLoaded
            ? (
              <>
                <button
                  type="button"
                  onClick={this.reversePeople}
                >
                  Reverse
                </button>

                <PeopleList
                  people={people}
                />
              </>
            )
            : (
              <button
                type="button"
                onClick={this.loadPeople}
              >
          Load
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
