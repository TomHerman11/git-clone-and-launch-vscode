#!/usr/bin/env node

import * as child_process from 'child_process';
import * as path from 'path';
import { texts } from './texts.js';
import * as utils from './utils.js';

// START HERE:
main();

function main() {
    const gitRepoUrl = process.argv[2];

    if (
        !validateGitRepoUrl(gitRepoUrl)
        || !gitClone(gitRepoUrl)
        || !cdToClonedRepo(gitRepoUrl)
        || !openVscode()
    ) {
        return;
    }
    utils.consoleLogSuccess(texts.SUCCESS(gitRepoUrl));
}

function validateGitRepoUrl(gitRepoUrl: string): boolean {
    if (!gitRepoUrl) {
        utils.consoleLogError(texts.NO_GIT_REPO);
        return false;
    } else if (!utils.verifyValidGitRepoUrl(gitRepoUrl)) {
        utils.consoleLogError(texts.GIT_REPO_NOT_VALID(gitRepoUrl));
        return false;
    }
}

function gitClone(gitRepoUrl: string): boolean {
    const a = child_process.execSync(`git clone ${gitRepoUrl}`, { encoding: 'utf8' });
    console.log(a);
    return true;
}

function cdToClonedRepo(gitRepoUrl): boolean {
    const folderName = path.parse(gitRepoUrl).name;
    const a = child_process.execSync(`cd ${folderName}`, { encoding: 'utf8' });
    console.log(a);
    return true;
}

function openVscode(): boolean {
    const a = child_process.execSync(`code .`, { encoding: 'utf8' });
    console.log(a);
    return true;
}