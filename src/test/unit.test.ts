import { expect } from "chai";
import * as curses from "..";
import * as codes from "../ansiEscapeCodes.json";
import { Part } from "../part";
import { Color, ICursorSettings } from "../types";

describe("Colors", () => {
    it("should change text color", () => {
        const text = "This is blue text.";
        const textColors = codes.text.color as { [key in Color]: Color };
        const lineSettings: ICursorSettings = { color: textColors.white };
        const blueText = new Part(text, lineSettings);
        blueText.setTextColor(textColors.blue);

        expect(blueText.print()).to.equal(`${codes.text.color.blue}${text}`);
    });

    it("should change background color", () => {
        const text = "This has a green background."
        const greenBackgroundText = curses.colorTextBackground(Color.green, text);

        expect(greenBackgroundText).to.equal(`${codes.text.backgroundColor.green}${text}`);
    });
});

describe("Layout", () => {
    it("should be able to justify right", () => {
        const right = "RIGHT";

    });
});
