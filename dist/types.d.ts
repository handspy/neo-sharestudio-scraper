export declare type NeoInkItem = {
    name: string;
    bucket: string;
};
export declare type NeoInkItemData = {
    section: number;
    uid: string;
    pageNumber: number;
    updated: number;
    favorite: boolean;
    owner: number;
    bookCode: number;
    noteUid: string;
    created: number;
    name: string;
    pageid: string;
    email: string;
    username: string;
    photoURL: string;
    version: number;
    strokes: {
        dotCount: number;
        strokeId: string;
        strokeType: number;
        penTipType: number;
        data: string;
        mac: string;
        thickness: number;
        color: number;
        startTime: number;
        updated: number;
        dots: NeoInkDot[];
    }[];
};
export declare type NeoInkDot = {
    deltaTime: number;
    time: number;
    f: number;
    x: number;
    y: number;
};
export declare type NeoNoteSize = {
    height: number;
    width: number;
    x: number;
    y: number;
};
export declare type HandSpyPage = {
    width: number;
    height: number;
    metadata: {
        [key: string]: string | number;
    };
    strokes: HandSpyStroke[];
};
export declare type HandSpyStroke = {
    startTime: number;
    endTime: number;
    dots: HandSpyDot[];
};
export declare type HandSpyDot = {
    timestamp: number;
    pressure: number;
    x: number;
    y: number;
};
export declare type Transform = {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
};
