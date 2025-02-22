import type { HandSpyPage, NeoInkItem, NeoInkItemData, NeoNoteSize } from './types';
export declare const fetchNeoInkItems: (id: string) => Promise<NeoInkItem[]>;
export declare const fetchNeoInkItemData: (item: NeoInkItem) => Promise<NeoInkItemData | null>;
export declare const fetchNeoNoteSize: (itemData: Partial<NeoInkItemData>) => Promise<NeoNoteSize>;
export declare const fetchNeoPages: (id: string) => Promise<HandSpyPage[]>;
