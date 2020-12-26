// taken from: https://stackoverflow.com/a/63283134/12206272
export function verifyValidGitRepoUrl(gitRepo: string): boolean {
    const vaildGitRepoRegex = RegExp("^(([A-Za-z0-9]+@|http(|s)\:\/\/)|(http(|s)\:\/\/[A-Za-z0-9]+@))([A-Za-z0-9.]+(:\d+)?)(?::|\/)([\d\/\w.-]+?)(\.git){1}$");
    return vaildGitRepoRegex.test(gitRepo);
}

export function consoleLogError(m: string) {
    console.error('\x1b[31m%s\x1b[0m', m); // inject m in %s
}

export function consoleLogSuccess(m: string) {
    console.log('\x1b[32m%s\x1b[0m', m); // inject m in %s
}