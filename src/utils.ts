module.exports = {
    // taken from: https://stackoverflow.com/a/63283134/12206272
    verifyValidGitRepoUrl: function (gitRepo: string): boolean {
        const vaildGitRepoRegex = /^((http(s)?:\/\/([a-zA-Z0-9]+@)?[a-zA-Z0-9][\.a-zA-Z0-9]+\/)|(git@[a-zA-Z0-9][\.a-zA-Z0-9]+:))[a-zA-Z0-9](-?[a-zA-Z0-9])*\/[a-zA-Z0-9](-?[a-zA-Z0-9])*(.git)?$/;
        return vaildGitRepoRegex.test(gitRepo);
    },

    consoleErrorRed: function (m: string): void {
        console.error('\x1b[31m%s\x1b[0m', m); // inject m in %s
    },

    consoleLogGreen: function (m: string): void {
        console.log('\x1b[32m%s\x1b[0m', m); // inject m in %s
    }
}