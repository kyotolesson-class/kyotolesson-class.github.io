---
layout: web_app_jr_default
title: Work Group Briefing
levelsToTop: "../"
---

## Goals

- Improvements of your Markdown Skills
- Improvement of you Git skills
- Learning of contributor workflow on GitHub

## Instructions

Time: 2 weeks

Realise a [Exquisite corpse](https://en.wikipedia.org/wiki/Exquisite_corpse) with GitHub

### Step 1: Initisalisation
1. Create a repository on GitHub named "Exercise-Exquisite-Corpse-MyFistName"
1. Create a *README.md* file
1. With markdown, give a title to your story
1. `clone` your repository on your computer
1. Create a branch __"development"__
1. go to this new branch
1. Write *3* lines to start your story into the *README.md* file __(use a Maximum of markdown)__
1. do an `add`
1. do a `commit`
1. do a `push` of the __"development"__ branch
1. Invite your friend as __contributor__

### Step 2 : contributors
1. Go on the repository you have been invited
1. do a `clone`
1. do `git branch -a` pour see all the branch list on the server
1. do a `pull` of the branch __"development"__
1. do a `checkout` on the __"development"__ branch
1. create a new branch __"your-first-name"__ from __"development"__ branch
1. add your *3* lines into the actual story in *README.md*
1. do an `add`
1. do a `commit`
1. do a  `push` of this branch __"your-first-name"__
1. do a `merge` from your branch __"your-first-name"__ to __"development"__
1. do a `push` form the branch __"development"__
1. then repeat the process for all of your friends

### Step 3 : Versioning
1. After all your friend have contribute to your story, go back to your repository
1. do a `merge` from __"development"__ branch to __"master"__ one
1. do a `tag` of "master" named __"version-1"__

### Step 4 : Correction
1. create a branch named __"corrections"__ from "master" one
1. correct the spelling or any miss typing
1. do a `add`
1. do a `commit`
1. do a `push`
1. do a `merge` with __"master"__
1. go on __"development"__ branch
1. update the __"development"__ branch by doing a `merge` of __"corrections"__ one

## Ressources

- [Git Basics](https://rogerdudler.github.io/git-guide/)
- [Git Cheat Sheet](https://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf)
- [Git workflow](http://blog.launchdarkly.com/wp-content/uploads/2016/07/Slide2.jpg)

## Next Step :
- [Git: Training](./practice.md)
- [Markdown: Group work](../markdown/group-work.md)
