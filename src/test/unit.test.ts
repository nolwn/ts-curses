import { expect } from "chai";
import { Part } from "../part";
import { BackgroundColor, TextColor, ColorSettings, Reset } from "../types";

describe("Colors", () => {
	it("should change text color", () => {
		const text = "This is colored text.";
		const textPart = new Part(text);

		textPart.setTextColor(TextColor.Blue);

		let textPrint = textPart.print({ color: [] });
		let expectedOutput = `${TextColor.Blue}${text}${Reset}`;

		expect(textPrint).to.equal(expectedOutput);

		textPart.setTextColor(TextColor.Red);

		textPrint = textPart.print({ color: [] });
		expectedOutput = `${TextColor.Red}${text}${Reset}`;

		expect(textPart.print({ color: [] })).to.equal(expectedOutput);
	});

	it("should change background color", () => {
		const text = "This text has a background.";
		const textPart = new Part(text);

		textPart.setBackgroundColor(BackgroundColor.Blue);
		let textPrint = textPart.print({ color: [] });
		let expectedOutput = `${BackgroundColor.Blue}${text}${Reset}`;

		expect(textPrint).to.equal(expectedOutput);

		textPart.setBackgroundColor(BackgroundColor.BrightMagenta);
		textPrint = textPart.print({ color: [] });
		expectedOutput = `${BackgroundColor.BrightMagenta}${text}${Reset}`;

		expect(textPrint).to.equal(expectedOutput);

		textPart.setBackgroundColor(BackgroundColor.Cyan);
		textPart.setTextColor(TextColor.Yellow);
		textPrint = textPart.print({ color: [] });
		expectedOutput = `${TextColor.Yellow}${BackgroundColor.Cyan}${text}${Reset}`;

		expect(textPrint).to.equal(expectedOutput);
	});
});
