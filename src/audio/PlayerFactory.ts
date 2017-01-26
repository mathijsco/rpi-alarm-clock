import { IPlayer } from "./IPlayer";
import WindowsPlayer from "./WindowsPlayer";

export { IPlayer };

export default class PlayerFactory {
    public Create(): IPlayer {
        return new WindowsPlayer();
    }
}