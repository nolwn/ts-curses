import * as codes from "./ansiEscapeCodes.json";
import { Color, ICursorSettings } from "./types";

export class Part {
    private readonly lineSettings: ICursorSettings;
    private settings: ICursorSettings;
    private text: string;

    constructor(text: string, lineSettings: ICursorSettings) {
        this.settings = lineSettings;
        this.lineSettings = lineSettings;
        this.text = text;
    }

    public setTextColor(color: Color): void {
        this.settings.color = color;
    }

    public print(): string {
        const prefix = `${this.settings.color}`;

        return `${prefix}${this.text}`;
    }
}
