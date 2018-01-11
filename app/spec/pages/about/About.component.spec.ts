import { expect } from "chai"
import AboutViewModel from "pages/about/About";
import Button from "scopes/about/entities/Button";

describe('About.ts', () => {
    it('Query invoked.', () => {
        var about: AboutViewModel = new AboutViewModel();
        about.buttons = { 
            ["tst_code"]: new Button("tst_code", "TST_CODE")
        };

        about.queryButtonClicked("tst_code");
        expect(about.buttons["tst_code"].inProgress).to.be.true;
    })
});