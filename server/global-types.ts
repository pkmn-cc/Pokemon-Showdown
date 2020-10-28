/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-shadow */

type ID = import('@pkmn/sim').ID;
interface AnyObject {[key: string]: any}

type Config = typeof import('../config/config-example') & AnyObject;

type GroupSymbol = import('./user-groups').GroupSymbol;
type AuthLevel = import('./user-groups').AuthLevel;

/** not actually guaranteed to be one of these */
type PunishType = '#chatfilter' | '#hostfilter' | '#dnsbl' | '#ipban';

// Chat
type CommandContext = Chat.CommandContext;
type PageContext = Chat.PageContext;
type PageTable = Chat.PageTable;
type ChatCommands = Chat.ChatCommands;
type SettingsHandler = Chat.SettingsHandler;
type ChatFilter = Chat.ChatFilter;
type NameFilter = Chat.NameFilter;
type StatusFilter = Chat.StatusFilter;
type LoginFilter = Chat.LoginFilter;
namespace Chat {
	export type CommandContext = import('./chat').CommandContext;
	export type PageContext = import('./chat').PageContext;
	export type SettingsHandler = import('./chat').SettingsHandler;
	export type PageTable = import('./chat').PageTable;
	export type ChatCommands = import('./chat').ChatCommands;
	export type ChatHandler = import('./chat').ChatHandler;
	export type ChatFilter = import('./chat').ChatFilter;
	export type NameFilter = import('./chat').NameFilter;
	export type StatusFilter = import('./chat').StatusFilter;
	export type LoginFilter = import('./chat').LoginFilter;
	export type PunishmentFilter = import('./chat').PunishmentFilter;
	export type FilterWord = import('./chat').FilterWord;
	export type AnnotatedChatCommands = import('./chat').AnnotatedChatCommands;
	export type AnnotatedChatHandler = import('./chat').AnnotatedChatHandler;
}

// Rooms
type GlobalRoomState = Rooms.GlobalRoomState;
type ChatRoom = Rooms.ChatRoom;
type GameRoom = Rooms.GameRoom;
type BasicRoom = Rooms.BasicRoom;
type RoomGame = Rooms.RoomGame;
type RoomBattle = Rooms.RoomBattle;
type Roomlog = Rooms.Roomlog;
type Room = Rooms.Room;
type RoomID = "" | "lobby" | "staff" | "upperstaff" | "development" | "battle" | string & {__isRoomID: true};
namespace Rooms {
	export type GlobalRoomState = import('./rooms').GlobalRoomState;
	export type ChatRoom = import('./rooms').ChatRoom;
	export type GameRoom = import('./rooms').GameRoom;
	export type BasicRoom = import('./rooms').BasicRoom;
	export type RoomGame = import('./room-game').RoomGame;
	export type RoomBattle = import('./room-battle').RoomBattle;
	export type Roomlog = import('./roomlogs').Roomlog;
	export type Room = import('./rooms').Room;
}

// Streams
// (I don't understand why eslint only has a problem with this - it's used in room-battle)
namespace Streams {
	export type WriteStream = import('@pkmn/sim').Streams.WriteStream;
	export type ReadStream = import('@pkmn/sim').Streams.ReadStream;
	export type ReadWriteStream = import('@pkmn/sim').Streams.ReadWriteStream;
	export type ObjectWriteStream<T> = import('@pkmn/sim').Streams.ObjectWriteStream<T>;
	export type ObjectReadStream<T> = import('@pkmn/sim').Streams.ObjectReadStream<T>;
	export type ObjectReadWriteStream<T> = import('@pkmn/sim').Streams.ObjectReadWriteStream<T>;
}

// Users
type User = Users.User;
type Connection = Users.Connection;
namespace Users {
	export type User = import('./users').User;
	export type Connection = import('./users').Connection;
}
