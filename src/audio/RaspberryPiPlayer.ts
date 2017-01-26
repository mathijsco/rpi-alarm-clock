import { IPlayer } from "./IPlayer";

export default class RaspberryPiPlayer implements IPlayer {
    public play(audioLocation: string): void {
        throw Error("Not implemented");
    }

    public stop(): void {
        throw Error("Not implemented");
    }
}