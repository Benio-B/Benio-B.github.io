module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testMatch: ['**/**/*.spec.ts?(x)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverage: false,
};
