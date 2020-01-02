import _ from "lodash";
import { BackgroundColor, ColorSettings, ICursorSettings, TextColor } from "./types";

export class Part {
	private settings: ICursorSettings;
	private text: string;

	constructor(text: string, settings: ICursorSettings = { color: [] }) {
		this.settings = settings;
		this.text = text;
	}

	public setTextColor(color: TextColor): void {
		this.settings.color[0] = color;
	}

	public setBackgroundColor(color: BackgroundColor): void {
		this.settings.color[1] = color;
	}

	public print(lineSettings: ICursorSettings): string {
		const settings = { ...lineSettings, ...this.settings };
		const prefix = _.values(settings.color).join("");
		const suffix = _.values(lineSettings.color).join("");

		return `${prefix}${this.text}${suffix}`;
	}
}
