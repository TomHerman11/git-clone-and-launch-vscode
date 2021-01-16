# git-clone-and-launch-vscode

npm Package - A cli tool to clone a Git repository and launch VSCcode with the cloned folder as the context 🎨🦥
I use this tool at least once a week for work / personal projects.

Install:  
`npm install -g git-clone-and-launch-vscode`

Run:  
`gclvs https://github.com/TomHerman11/git-clone-and-launch-vscode.git`

## Key Points
- `gclvs` checks if the given Git repository URL is valid by testing it with a Regex.
- `gclvs` runs:
    1. `git clone <git repository url>`
    2. `code ./<git repository name>`
- Cloning with a personal access token as part of the Git repository URL is supported. The token and the URL are not stored in any way.
