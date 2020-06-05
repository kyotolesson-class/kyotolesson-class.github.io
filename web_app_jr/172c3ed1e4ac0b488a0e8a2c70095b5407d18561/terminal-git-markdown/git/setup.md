# Git 

## What is Git?

Git is a version control software. It is a unavoidable tool for all developer who want to stock, collaborate and know each details of any modifications of code from a team project.

using a version control system is essential in web development. It allows us to go back in our previous saved code, to test without polluting the productionn code base, it give us a backup in case of crash disk... In short, IT IS ESSENTIAL.

That is why we have to learn to work with git.

[github.com](https://github.com) is a Git service ww will use together during all lesson We will teach you.

Git is a little bit difficult to learn and use but do not worry we will have a lot of fun with it.

Complet Git  Tutorial : [https://try.githun.io](https://try.github.io)
Register on GitHub: [https://github.com/join](https://github.com/join)

### Github Profile

* Take the time to update your GitHub profile: [https://github.com/settings/profile](https://github.com/ettings/profile)

### Use GitHub with **Linux** Terminal

To log to your account GitHub you must have an SSH key, Here are the steps to create this key and send it to GitHub

1. Open your Terminal.
1. copy/paste the following text but change the email address with yours (the same you used for GiHub).
```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.co"
```

This code will create a ssh key with your email as identification.

1. Generating public/private rsa key pair
When you're prompted to "Enter a file in which to save the key," press `Enter`. This accepts the default file location.

1. Enter a file in which to save the key (/home/user/*my-key-name*): [Press enter]
1. Enter passphrase (empty for no passphrase): [let empty]
1. Enter same passphrase again: [let empty]
1. cat ~/*my-key-name*/*my-key-name*.pub
1. copy the ssh key ( start with `ssh-rsa ......`)
1. Follow this tutorial from  point 2 : https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/
 
### Use gitHub with **Mac** Terminal

To log to your GitHub account you need a SSH key, Here are the steps to create this key and send it to GitHub

1. Open a Terminal
1. Paste the text below, substituting in your GitHub email address.
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
This creates a new ssh key, using the provided email as a label.
1. Make only the First step [Generating a new SSH key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
1. cat ~/.ssh/id_rsa.pub
1. Copy/paste the key ( start with **ssh-rsa**...)
1. the follow this tuto from Point 2 : https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/

### Documentation

* [Git - the Little Guide](http://rogerdudler.github.io/git-guide/)
* [Codeschool - git](https://www.codeschool.com/learn/git)
* [Codecademy - git (limited)](https://www.codecademy.com/courses/learn-git/lessons/git-workflow/exercises/hello-git)
* [Learn git branching](http://learngitbranching.js.org)
* [15min to Learn Git](https://try.github.io) :fr: :uk:
* [Git Pro Book](http://git-scm.com/book/en/v2) :fr: :uk:
* [Aide-Mémoire Git](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf) :uk:
* `pdf` [Using Git in Team](01-GIT/documentation/git_2.pdf) :gb:
* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) :uk:
* [Git-tips](https://github.com/git-tips/tips)
* [Bitbucket Complete tutorial](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud) :uk:
* Read and practise all of this tutorial: [Learn Enough Command Line to Be Dangerous](http://www.learnenough.com/command-line/)
* [markdown-cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
* [Become a git guru](https://fr.atlassian.com/git/tutorials)

### Branch Conflict

* * If you have a _"This branch has conflicts that must be resolved"_ on the merge of a GitHub Pull-request, you can read that: [syncing-a-fork](https://help.github.com/articles/syncing-a-fork/) ! :uk:

### Contribute to a repository without be a contributor

[create-pull-request](https://services.github.com/on-demand/intro-to-github/create-pull-request)

### Next Step:
- [Git: Exercice of Exquisite Corpse](00-terminal-git-markdown/git/exquisite-corpse.md)
- [Git: Training](00-terminal-git-markdown/git/practice.md)
- [Markdown: Group work](00-terminal-git-markdown/markdown/group-work.md)

