import History from "../../../components/history/history"
import * as React from "react"
import { shallow, ShallowWrapper } from "enzyme";

describe("<History />", () => {
    let home: ShallowWrapper;
    beforeEach(() => {
        home = shallow(<History />);
    });
    test("Renders title", async () => {
        const title = home.find("h1").first();
        expect(title.text()).toBe("History");
    });
});