import * as ansiCodes from "./ansiEscapeCodes.json";
import { Color } from "./types";

const textColors = ansiCodes.text.color as { [key in Color]: string };
const backgroundColors = ansiCodes.text.backgroundColor as { [key in Color]: string };

export const colorText = (color: Color, text: string): string =>
    `${textColors[color]}${text}`;

export const colorTextBackground = (color: Color, text: string): string =>
    `${backgroundColors[color]}${text}`;
