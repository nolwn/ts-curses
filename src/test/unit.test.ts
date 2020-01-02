import { expect } from "chai";
import { Part } from "../part";
import { BackgroundColor, TextColor } from "../types";

describe("Colors", () => {
	it("should change text color", () => {
		const text = "This is colored text.";
		const textPart = new Part(text);

		textPart.setTextColor(TextColor.Blue);
		expect(textPart.print({ color: [TextColor.White] })).to.equal(
			`${TextColor.Blue}${text}${TextColor.White}`
		);

		textPart.setTextColor(TextColor.Red);
		expect(textPart.print({ color: [TextColor.White] })).to.equal(
			`${TextColor.Red}${text}${TextColor.White}`
		);
	});

	it("should change background color", () => {
		const text = "This text has a background.";
		const backgroundPart = new Part(text);

		backgroundPart.setBackgroundColor(BackgroundColor.Blue);
		expect(
			backgroundPart.print({
				color: [, BackgroundColor.Black]
			})
		).to.equal(`${BackgroundColor.Blue}${text}${BackgroundColor.Black}`);

		backgroundPart.setBackgroundColor(BackgroundColor.BrightMagenta);
		expect(
			backgroundPart.print({
				color: [, BackgroundColor.Black]
			})
		).to.equal(`${BackgroundColor.BrightMagenta}${text}${BackgroundColor.Black}`);

		backgroundPart.setBackgroundColor(BackgroundColor.Cyan);
		backgroundPart.setTextColor(TextColor.Yellow);
		expect(
			backgroundPart.print({
				color: [TextColor.White, BackgroundColor.Black]
			})
		).to.equal(
			`${TextColor.Yellow}${BackgroundColor.Cyan}${text}${TextColor.White}${BackgroundColor.Black}`
		);
	});
});
