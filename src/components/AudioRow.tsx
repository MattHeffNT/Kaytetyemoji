import { useEffect, useState, useRef } from 'react';
import { IonRow } from '@ionic/react';

type Track = 'audio' | 'phrase';

const AudioRow: React.FC<any> = ({ emoji, icon }) => {
  const IonIcon = icon;
  const phrase = emoji.phrases;

  // one Audio element per track, created once per emoji (none if the emoji has no phrase)
  const tracks = useRef<Record<Track, HTMLAudioElement | null>>({ audio: null, phrase: null });

  // which track is playing, if any - drives the stop icon, highlight and ghosting
  const [playing, setPlaying] = useState<Track | null>(null);

  useEffect(() => {
    const create = (src?: string) => {
      if (!src) return null;
      const el = new Audio(src);
      // reset the UI when playback finishes or the file fails to load
      el.onended = () => setPlaying(null);
      el.onerror = () => setPlaying(null);
      return el;
    };
    tracks.current = { audio: create(emoji.audio), phrase: create(emoji.phrases) };

    // cleanup: stop playback and release the media players (Android WebView limits how many can exist)
    return () => {
      Object.values(tracks.current).forEach((el) => {
        if (!el) return;
        el.onended = null;
        el.onerror = null;
        el.pause();
        el.removeAttribute('src');
        el.load();
      });
      tracks.current = { audio: null, phrase: null };
    };
  }, [emoji.audio, emoji.phrases]);

  const stop = (track: Track) => {
    const el = tracks.current[track];
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
  };

  // tapping the playing track stops it; tapping the other one switches to it
  const toggle = (track: Track) => {
    if (playing) stop(playing);
    if (playing === track) {
      setPlaying(null);
      return;
    }
    const el = tracks.current[track];
    if (!el) return;
    setPlaying(track);
    el.play().catch(() => setPlaying(null));
  };

  const rowClass = (track: Track) =>
    'iconRow' + (playing === track ? ' audio-active' : playing ? ' ghost' : '');

  return (
    <div>
      {/* Render the audio row */}
      <IonRow onClick={() => toggle('audio')} className={rowClass('audio')} id="audio">
        {playing === 'audio' ? (
          // Render the stop icon when audio is playing
          <IonIcon name="stop-circle" className="modal-icon" size="large" />
        ) : (
          // Render the play icon when audio is not playing
          <IonIcon name="play-circle-outline" className="modal-icon" size="large" />
        )}
        <h4> word </h4>
      </IonRow>

      {/* Render the phrase audio row */}
      {phrase ? (
        <IonRow onClick={() => toggle('phrase')} className={rowClass('phrase')} id="phrase">
          {playing === 'phrase' ? (
            // Render the stop icon when phrase audio is playing
            <IonIcon name="stop-circle" className="modal-icon" size="large" />
          ) : (
            // Render the play icon when phrase audio is not playing
            <IonIcon name="play-circle-outline" className="modal-icon" size="large" />
          )}
          <h4> phrase </h4>
          <br />
        </IonRow>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AudioRow;
