import * as ansiCodes from "./ansiEscapCodes.json";

export const blue = (text: string): string => `${ansiCodes.text.color.blue}${text}`;
