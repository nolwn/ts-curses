import { BackgroundColor, TextColor } from "./types";

export const colorText = (color: TextColor, text: string): string => `${color}${text}`;

export const colorTextBackground = (color: BackgroundColor, text: string): string =>
	`${color}${text}`;
