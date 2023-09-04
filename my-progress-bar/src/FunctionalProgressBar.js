import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-progressbar';

const FuntionalProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Hier kannst du die Fortschrittsaktualisierung implementieren, z.B. basierend auf Datenabrufen oder anderen Ereignissen.
    // In diesem Beispiel aktualisieren wir den Fortschritt alle 2 Sekunden.
    const progressInterval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      } else {
        clearInterval(progressInterval);
      }
    }, 2000);

    return () => {
      clearInterval(progressInterval); // Sicherstellen, dass das Intervall beim Verlassen der Komponente gestoppt wird.
    };
  }, [progress]);

  return (
    <div>
      <h1>Meine Fortschrittsleiste</h1>
      <ProgressBar completed={progress} />
    </div>
  );
}

export default FuntionalProgressBar;
