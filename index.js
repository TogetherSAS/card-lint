module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "import/extensions": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-props-no-spreading": 0,
        "react/prop-types": 1,
        "jsx-a11y/click-events-have-key-events": 0,
        "import/prefer-default-export": 0,
        "react/destructuring-assignment": 0,
        "consistent-return": 0,
        "import/no-unresolved": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "no-nested-ternary": 0,
        "sx-a11y/no-static-element-interactions": 0,
        "no-shadow": 0,
        "import/no-cycle": 0,
        "react-hooks/exhaustive-deps": 0,
        "no-plusplus": 0,
        "no-param-reassign": 0
    }
};