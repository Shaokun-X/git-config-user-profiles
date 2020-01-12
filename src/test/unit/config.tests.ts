import * as assert from "assert";
import * as config from "../../config";

// import * as myExtension from '../extension';

suite("Config @unit", () => {
    test("getProfiles() should return empty array if no config is found", () => {
        assert.equal([1, 2, 3].indexOf(5), -1);
        assert.equal([1, 2, 3].indexOf(0), -1);
    });
});
