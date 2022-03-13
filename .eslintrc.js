module.exports = {
    env: {
        amd: true,
    },
    extends: ['airbnb-base', 'plugin:jest/recommended'],
    rules: {
        'linebreak-style': 0,
        'no-console': 0,
        'no-plusplus': 0,
        'max-len': 0,
        'no-return-assign': 0,
        'no-await-in-loop': 0,
        indent: 0, // Allowing prettier to handle this
        'consistent-return': 0,
        'comma-dangle': 0,
        'operator-linebreak': 0,
        'implicit-arrow-linebreak': 0,
        'function-paren-newline': 0,
        'object-curly-newline': 0,
        'newline-per-chained-call': 0,
        'no-param-reassign': 0,
        'no-new-func': 0,
        'no-continue': 0,
        'arrow-body-style': 0,
        'import/no-dynamic-require': 0,
        'global-require': 0,
        'default-case': 0,
        'no-confusing-arrow': 0,
        'no-underscore-dangle': 0,
    },
};
