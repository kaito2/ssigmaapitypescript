// package: ssigmaapi.type
// file: ssigmaapi/type/useractivity.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class UserActivity extends jspb.Message { 
    getStartTimestamp(): number;
    setStartTimestamp(value: number): void;

    getEndTimestamp(): number;
    setEndTimestamp(value: number): void;


    hasKeyboardInput(): boolean;
    clearKeyboardInput(): void;
    getKeyboardInput(): KeyboardInput | undefined;
    setKeyboardInput(value?: KeyboardInput): void;

    clearWindowListList(): void;
    getWindowListList(): Array<ApplicationWindow>;
    setWindowListList(value: Array<ApplicationWindow>): void;
    addWindowList(value?: ApplicationWindow, index?: number): ApplicationWindow;

    getUserState(): UserActivity.UserState;
    setUserState(value: UserActivity.UserState): void;


    hasMouseInput(): boolean;
    clearMouseInput(): void;
    getMouseInput(): MouseInput | undefined;
    setMouseInput(value?: MouseInput): void;

    getSwitchApplicationCount(): number;
    setSwitchApplicationCount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserActivity.AsObject;
    static toObject(includeInstance: boolean, msg: UserActivity): UserActivity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserActivity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserActivity;
    static deserializeBinaryFromReader(message: UserActivity, reader: jspb.BinaryReader): UserActivity;
}

export namespace UserActivity {
    export type AsObject = {
        startTimestamp: number,
        endTimestamp: number,
        keyboardInput?: KeyboardInput.AsObject,
        windowListList: Array<ApplicationWindow.AsObject>,
        userState: UserActivity.UserState,
        mouseInput?: MouseInput.AsObject,
        switchApplicationCount: number,
    }

    export enum UserState {
    WORKING = 0,
    AWAY = 1,
    }

}

export class KeyboardInput extends jspb.Message { 
    getStrokeCount(): number;
    setStrokeCount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardInput.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardInput): KeyboardInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardInput;
    static deserializeBinaryFromReader(message: KeyboardInput, reader: jspb.BinaryReader): KeyboardInput;
}

export namespace KeyboardInput {
    export type AsObject = {
        strokeCount: number,
    }
}

export class MouseInput extends jspb.Message { 
    getClickCount(): number;
    setClickCount(value: number): void;

    getLeftClickCount(): number;
    setLeftClickCount(value: number): void;

    getMiddleClickCount(): number;
    setMiddleClickCount(value: number): void;

    getRightClickCount(): number;
    setRightClickCount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MouseInput.AsObject;
    static toObject(includeInstance: boolean, msg: MouseInput): MouseInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MouseInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MouseInput;
    static deserializeBinaryFromReader(message: MouseInput, reader: jspb.BinaryReader): MouseInput;
}

export namespace MouseInput {
    export type AsObject = {
        clickCount: number,
        leftClickCount: number,
        middleClickCount: number,
        rightClickCount: number,
    }
}

export class Point extends jspb.Message { 
    getX(): number;
    setX(value: number): void;

    getY(): number;
    setY(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Point.AsObject;
    static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Point;
    static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
    export type AsObject = {
        x: number,
        y: number,
    }
}

export class ApplicationWindow extends jspb.Message { 

    hasLefttop(): boolean;
    clearLefttop(): void;
    getLefttop(): Point | undefined;
    setLefttop(value?: Point): void;

    getHeight(): number;
    setHeight(value: number): void;

    getWidth(): number;
    setWidth(value: number): void;

    getTitle(): string;
    setTitle(value: string): void;

    getProgramName(): string;
    setProgramName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getCompany(): string;
    setCompany(value: string): void;

    getIsForeground(): boolean;
    setIsForeground(value: boolean): void;

    getWindowState(): ApplicationWindow.WindowState;
    setWindowState(value: ApplicationWindow.WindowState): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplicationWindow.AsObject;
    static toObject(includeInstance: boolean, msg: ApplicationWindow): ApplicationWindow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplicationWindow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplicationWindow;
    static deserializeBinaryFromReader(message: ApplicationWindow, reader: jspb.BinaryReader): ApplicationWindow;
}

export namespace ApplicationWindow {
    export type AsObject = {
        lefttop?: Point.AsObject,
        height: number,
        width: number,
        title: string,
        programName: string,
        description: string,
        company: string,
        isForeground: boolean,
        windowState: ApplicationWindow.WindowState,
        timestamp: number,
    }

    export enum WindowState {
    NORMAL = 0,
    MAXIMIZED = 1,
    MINIMIZED = 2,
    }

}
