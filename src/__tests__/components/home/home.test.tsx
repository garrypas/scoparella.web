import Home from "../../../components/home/home"
import * as React from "react"
import { shallow, ShallowWrapper } from "enzyme";

describe("<Home />", () => {
    let home: ShallowWrapper;
    beforeEach(() => {
        home = shallow(<Home />);
    });
    test("Renders title", async () => {
        const title = home.find("h1").first();
        expect(title.text()).toBe("Home");
    });
});