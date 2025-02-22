import type { NeoInkDot } from "./types";
export declare function getDots(data: string | any, dotCount: number, time: number, scale?: number): NeoInkDot[] | undefined;
export declare function getTransform(transformData: string | {
    toUint8Array: () => Uint8Array;
}, size: {
    w: number;
    h: number;
}, rect: {
    x: number;
    width: number;
    y: number;
    height: number;
}): number[];
export declare function intToByteArray(input: number): number[];
