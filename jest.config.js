module.exports = async () => {
    return {
        rootDir: ".",
        verbose: true,
        moduleFileExtensions: ["js", "vue"],
        transform: {
            "^.+\\.js$": "babel-jest",
            "^.+\\.vue$": "@vue/vue3-jest",
        },
        testEnvironment: "jsdom",
        testEnvironmentOptions: {
            customExportConditions: ["node", "node-addons"],
        },
        transformIgnorePatterns: ["/node_modules/"],
        collectCoverage: true,
        coverageReporters: ["clover"],
        coverageDirectory: "<rootDir>/coverage/js",
    };
};
