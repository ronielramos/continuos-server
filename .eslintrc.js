module.exports = {
    "parser": "babel-eslint",
    "extends": "standard",
    "rules": {
        "no-multiple-empty-lines": [1, { "max": 3, "maxEOF": 1 }],
        "global-require": "off",
        "no-unused-vars": [1, { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    }
};