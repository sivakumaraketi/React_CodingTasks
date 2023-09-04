import React from 'react';
import ProgressBar from 'react-progressbar';


class MyProgressBar extends React.Component {
  constructor() {
    super();
    this.state = {
      progress: 0, // Der Anfangsfortschritt ist 0%
    };
  }

  componentDidMount() {
    // Hier kannst du die Fortschrittsaktualisierung implementieren, z.B. basierend auf Datenabrufen oder anderen Ereignissen.
    // In diesem Beispiel aktualisieren wir den Fortschritt alle 2 Sekunden.
    this.progressInterval = setInterval(() => {
      if (this.state.progress < 100) {
        this.setState({ progress: this.state.progress + 10 });
      } else {
        clearInterval(this.progressInterval);
      }
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.progressInterval); // Sicherstellen, dass das Intervall beim Verlassen der Komponente gestoppt wird.
  }

  render() {
    return (
      <div>
        <h1>Meine Fortschrittsleiste</h1>
        <ProgressBar completed={this.state.progress} />
      </div>
    );
  }
}

export default MyProgressBar;
