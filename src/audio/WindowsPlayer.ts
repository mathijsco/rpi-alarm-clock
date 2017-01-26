import { IPlayer } from "./IPlayer";

// const player = require("play-sound")({
//   players: ["cmdmp3"],
//   player: "./assets/mediaplayers/windows/cmdmp3/cmdmp3"
// });

// mplayer supports internet streams
const player = require("play-sound")({
  players: ["mplayer"],
  player: "./assets/mediaplayers/windows/mplayer/mplayer"
});

export default class WindowsPlayer implements IPlayer {
    private audio: any;

    public play(audioLocation: string): void {
        if (this.audio) {
            this.stop();
        }

        this.audio = player.play(audioLocation, function(err: any) {
            // If the process is killed, ignore the exception.
            if (err && err.signal !== "SIGTERM") {
                throw err;
            }
        });
    }

    public stop(): void {
        if (!this.audio) {
            return;
        }

        this.audio.kill();
        this.audio = null;
    }
}