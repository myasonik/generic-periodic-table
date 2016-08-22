module.exports = {
  "parser": "babel-eslint",

  "env": {
    "node": true,
    "browser": true,
    "commonjs": true,
    "shared-node-browser": true,
    "es6": true,
    "worker": true,
    "serviceworker": true
  },

  "parserOptions": {
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "impliedStrict": true
      // "jsx": true
    }
  },

  "rules": {
    // posible errors
    "comma-dangle": [2, "never"],
    "no-cond-assign": [2, "always"],
    "no-console": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,

    // best practice
    "accessor-pairs": [2, {"getWithoutSet": true}],
    "array-callback-return": 2,
    "block-scoped-var": 2,
    "complexity": 2,
    "consistent-return": 2,
    "curly": [2, "multi-line"],
    "default-case": 2,
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-function": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-fallthrough": 0,
    "no-floating-decimal": 2,
    "no-implicit-coercion": 2,
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 0,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": [2, {
      "ignore": [-1, 0, 1],
      "ignoreArrayIndexes": true,
      "enforceConst": true
    }],
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": 2,
    "no-unused-labels": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-void": 2,
    "no-warning-comments": 0,
    "no-with": 2,
    "radix": 2,
    "vars-on-top": 2,
    "wrap-iife": 2,
    "yoda": 2,

    // strict
    "strict": [2, "never"],

    // vars
    "init-declarations": 0,
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-unused-vars": 2,
    "no-use-before-define": 2,

    // node rules
    // skipped

    // style
    "array-bracket-spacing": 2,
    "block-spacing": 2,
    "brace-style": [2, "1tbs", {"allowSingleLine": true}],
    "camelcase": "error",
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "consistent-this": [2, "self"],
    "eol-last": 2,
    "func-names": 0,
    "func-style": 0,
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "indent": [2, 2],
    "jsx-quotes": [2, "prefer-single"],
    "key-spacing": 2,
    "keyword-spacing": 2,
    "linebreak-style": 0,
    "lines-around-comment": 2,
    "max-depth": 2,
    "max-len": 0,
    "max-nested-callbacks": 2,
    "max-params": 2,
    "max-statements": 0,
    "new-cap": 2,
    "new-parens": 2,
    "newline-after-var": 2,
    "newline-before-return": 2,
    "newline-per-chained-call": 0,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-continue": 2,
    "no-inline-comments": 0,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": 2,
    "no-negated-condition": 0,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-plusplus": 0,
    "no-restricted-syntax": 0,
    "no-spaced-func": 2,
    "no-ternary": 0,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": ["error", "always"],
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": 2,
    "operator-assignment": [2, "never"],
    "operator-linebreak": 2,
    "padded-blocks": 0,
    "quote-props": [2, "consistent-as-needed"],
    "quotes": [2, "single", "avoid-escape"],
    "require-jsdoc": 0,
    "semi": 2,
    "semi-spacing": 2,
    "sort-vars": 0,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, "never"],
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": [2, "always", {
      "exceptions":["-", "=", "/", "*"]
    }],
    "wrap-regex": 2,

    // es6
    "arrow-body-style": 2,
    "arrow-parens": 2,
    "arrow-spacing": 2,
    "constructor-super": 2,
    "generator-star-spacing": [2, "before"],
    "no-class-assign": 2,
    "no-confusing-arrow": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-new-symbol": 2,
    "no-this-before-super": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-var": 2,
    "object-shorthand": 2,
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-reflect": 2,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2,
    "template-curly-spacing": 2,
    "yield-star-spacing": 2
  }
};