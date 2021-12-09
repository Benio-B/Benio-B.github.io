module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': 'vue3-jest',
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testMatch: ['**/**/*.spec.ts?(x)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverage: false,
};
