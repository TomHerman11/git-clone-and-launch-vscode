export const texts = {
    NO_GIT_REPO: "Git repository was not provided.",
    GIT_REPO_NOT_VALID: (url: string): string => `Git repository URL: '${url}' is not valid.`,
    SUCCESS: (url: string): string => `Success!\nCloned '${url}' and opened VSCode.\nHappy coding!`,
    USAGE:
        `usage: gcvs <git repository url> [--help]

Clone a Git repository and launch VSCcode with the cloned folder as the context.

Happy coding!`,
}