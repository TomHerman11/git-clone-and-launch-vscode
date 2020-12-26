export const texts = {
    NO_GIT_REPO: "Git repository was not provided.",
    GIT_REPO_NOT_VALID: (url: string): string => `Git repository URL: '${url}' is not valid.`,
    SUCCESS: (url: string): string => `Success! Cloned '${url}' and opened VSCode. Happy coding!`
}