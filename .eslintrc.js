// module.exports = {
//   'env': {
//     'browser': true,
//     'commonjs': true,
//     'es6': true
//   },
//   'extends': [
//     'eslint:recommended',
//     //'plugin:vue/recommended'
//   ],
//   globals: {
//     //'vue': true,
//     //'React': true
//   },
//   plugins: [
//     'html',
//     //'react'
//   ],
//   'parser': 'babel-eslint',
//   //"extends": "standard",
//   'parserOptions': {
//     'ecmaVersion': 2015,
//     'ecmaFeatures': {
//       'experimentalObjectRestSpread': true,
//       'jsx': true,
//       'arrowFunctions': true,
//       'classes': true,
//       'modules': true,
//       'defaultParams': true
//     },
//     'sourceType': 'module'
//   },
//   'rules': {
//     'indent': [
//       'error',
//       2,
//       {SwitchCase: 1}
//     ],
//     'linebreak-style': [
//       'error',
//       'windows'
//     ],
//     'quotes': [
//       'error',
//       'single'
//     ],
//     'eqeqeq': 2,
//     'space-before-function-paren': [0, 'always'], //函数定义时括号前面要不要有空格
//     'comma-spacing': 2, //逗号前后的空格
//     'no-console': 0,
//     'no-debugger': 0,
//     'on-unused-vars': 'off',
//     'space-in-parens': [2, 'never'], //小括号里面要不要有空格
//     'space-infix-ops': 2, //中缀操作符周围要不要有空格
//     'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }], //对象字面量中冒号的前后空格
//     'brace-style': [2, '1tbs'], //大括号风格
//     'generator-star-spacing': 2, //生成器函数*的前后空格
//     'arrow-parens': 2, //箭头函数用小括号括起来
//     'arrow-spacing': 2, //=>的前/后括号
//     'keyword-spacing': 2, //关键字后面是否要空一格
//     'space-before-blocks': [2, 'always'], //不以新行开始的块{前面要不要有空格
//     'no-multiple-empty-lines': [2, {'max': 1}], //空行最多不能超过2行
    
//     "@typescript-eslint/camelcase": "off",
//     "@typescript-eslint/explicit-function-return-type": "off",
//     "@typescript-eslint/no-non-null-assertion": "off", // allow foo.bar!.fn()
//     "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": false, "typedefs": false }],
//     "@typescript-eslint/member-delimiter-style": "off",
//     "@typescript-eslint/no-explicit-any": "off",
//     "@typescript-eslint/no-empty-interface": "off",
//     "@typescript-eslint/interface-name-prefix": "off",
//     "@typescript-eslint/array-type": ["error", { "default": "array-simple" }],
//     "@typescript-eslint/class-name-casing": ["error", { "allowUnderscorePrefix": true }], // class name 中允许出现 _Xxx 这样的
//     "@typescript-eslint/no-inferrable-types": "off",

//     "no-unused-vars": "off",
//     // "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "ignoreRestSiblings": true }],
//     "@typescript-eslint/no-unused-vars": "off",

//     // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md#rule-changes
//     "no-useless-constructor": "off",
//     "@typescript-eslint/no-useless-constructor": "error"
//   }
// };
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb-base',
    'airbnb/rules/react',
    'airbnb/rules/react-hooks',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    ecmaVersion: 2018,
    impliedStrict: true,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks'
  ],
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect"
    },
    "linkComponents": [
      { "name": "Link", "linkAttribute": "to" }
    ]
  },
  rules: {
    "semi": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "max-classes-per-file": "off",
    "max-len": ["warn", 120, { "ignoreUrls": true, "ignoreStrings": true }],
    "func-names": ["error", "as-needed"],
    "multiline-ternary": ["error", "always-multiline"],
    "no-mixed-operators": "off",
    // "arrow-parens": ["error", "as-needed"], 这里感觉还是加括号好一些
    "arrow-body-style": ["error", "as-needed"],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "asyncArrow": "always",
      "named": "never"
    }],
    "consistent-return": "off",
    "no-param-reassign": "off",
    "prefer-template": "off",
    "prefer-promise-reject-errors": "off",
    "prefer-destructuring": "off",
    "no-script-url": "off",
    "object-curly-newline": "off",
    "prefer-arrow-callback": "off",
    "no-plusplus": "off",
    "padded-blocks": "off",
    "lines-between-class-members": "off",
    "no-restricted-syntax": "off",
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-throw-literal": "off",
    "class-methods-use-this": "off",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "no-multi-spaces": ["error", { ignoreEOLComments: true }],
    "no-nested-ternary": "warn",
    "no-continue": "off",

    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default-member": "off",
    "import/extensions": ["error", "ignorePackages", {
      "js": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never"
    }],
    // TODO: REMOVE ME: eslint 应该可以排除类型的循环 import 才对
    // -> https://github.com/benmosher/eslint-plugin-import/issues/1453
    "import/no-cycle": "off",
    "import/named": "off",
    "import/no-unresolved": "off",

    "react/jsx-wrap-multilines": ["error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "ignore",
        "condition": "ignore",
        "logical": "ignore",
        "prop": "ignore"
      }
    ],
    "react/jsx-filename-extension": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-closing-bracket-location": ["error", { selfClosing: false }],
    "react/prop-types": "off",
    "react/button-has-type": "warn",
    "react/jsx-tag-spacing": ["error", {"beforeSelfClosing": "always"}],
    "react/jsx-one-expression-per-line": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/static-property-placement": "off",
    "react/state-in-constructor": ["warn", "never"],
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": false
    }],
    "react/sort-comp": "off",
    "react/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "multiline" }],
    "react/no-array-index-key": "off",
    "react/prefer-stateless-function": "warn",
    "react/jsx-no-target-blank": ["error", { "allowReferrer": true }],

    "react-hooks/exhaustive-deps": "warn",

    "indent": "off",
    "react/jsx-indent": ["error", 2, {
      "indentLogicalExpressions": true
    }],
    "@typescript-eslint/indent": ["error", 2, {
      "ignoredNodes": ["ConditionalExpression", "TSTypeParameterInstantiation"],
      "SwitchCase": 1,
      // "ObjectExpression": 1,
      // "MemberExpression": "off",
      // "flatTernaryExpressions": true,
      // "FunctionDeclaration": {"body": 1, "parameters": 0}
    }],

    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off", // allow foo.bar!.fn()
    "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": false, "typedefs": false }],
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/array-type": ["error", { "default": "array-simple" }],
    "@typescript-eslint/class-name-casing": ["error", { "allowUnderscorePrefix": true }], // class name 中允许出现 _Xxx 这样的
    "@typescript-eslint/no-inferrable-types": "off",

    "no-unused-vars": ["error", { "argsIgnorePattern": "^_", "ignoreRestSiblings": true }],
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "ignoreRestSiblings": true }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md#rule-changes
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error"
  },
  "overrides": [{
    "files": ["*.spec.ts", "*.spec.tsx"],
    "rules": {
      "dot-notation": "off",
      "no-console": "off",
      "prefer-promise-reject-errors": "off",
      "import/first": "off",
      "react/prefer-stateless-function": "off",
      "react/jsx-max-props-per-line": "off",
      "react/self-closing-comp": "off",
      "react/display-name": "off",
      "react/button-has-type": "off",
      "@typescript-eslint/no-empty-function": "off"
    }
  }]
}
