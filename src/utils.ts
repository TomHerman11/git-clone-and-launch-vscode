// taken from: https://stackoverflow.com/a/63283134/12206272
export function verifyValidGitRepoUrl(gitRepo: string): boolean {
    const vaildGitRepoRegex = /^((https:\/\/([a-z0-9]*@)?github.com\/)|(git@github.com:))[a-zA-Z0-9](-?[a-zA-Z0-9])*\/[a-zA-Z0-9](-?[a-zA-Z0-9])*(.git)?$/;
    return vaildGitRepoRegex.test(gitRepo);
}

export function consoleErrorRed(m: string) {
    console.error('\x1b[31m%s\x1b[0m', m); // inject m in %s
}

export function consoleLogGreen(m: string) {
    console.log('\x1b[32m%s\x1b[0m', m); // inject m in %s
}