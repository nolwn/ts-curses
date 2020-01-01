import { expect } from "chai";
import * as curses from "..";
import * as ansiCodes from "../ansiEscapCodes.json";

describe("Colors", () => {
    it("should change text to red", () => {
        const text = "This is important text";
        const blueText = curses.blue(text);

        expect(blueText).to.exist;
        expect(blueText).to.equal(`${ansiCodes.text.color.blue}${text}`);
    });
});