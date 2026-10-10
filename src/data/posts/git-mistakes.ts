import type { Post } from "./types";

export const gitMistakes: Post = {
  slug: "git-and-github-mistakes-beginners-make",
  title: "Git and GitHub Mistakes Beginners Make (and How to Fix Them)",
  excerpt:
    "Push rejected, merge conflicts, wrong branch, committed a secret: the problems that scare beginners most, with calm step-by-step fixes.",
  category: "Git",
  date: "2026-08-24",
  tags: ["Git", "GitHub", "Beginners", "Troubleshooting"],
  accent: "rose",
  blocks: [
    {
      type: "p",
      text: "Git is one of those tools that feels simple until the first time something goes wrong. A red error message in the terminal can make you want to delete the whole folder and start again. Please do not. Almost every Git problem has a calm fix, and most of them are the same few problems repeating.",
    },
    {
      type: "p",
      text: "These are the mistakes I and many other learners run into most often, with the commands that solve them.",
    },
    { type: "h2", text: "1. “Push rejected” because the remote has new commits" },
    {
      type: "p",
      text: "You try to push and Git says your branch is behind. It simply means the remote repository has commits you do not have yet (perhaps you edited a README on GitHub). Pull first, then push.",
    },
    {
      type: "code",
      lang: "bash",
      code: `git pull --rebase origin main
git push origin main`,
    },
    { type: "h2", text: "2. Merge conflicts" },
    {
      type: "p",
      text: "A conflict happens when two changes touch the same lines. Git stops and marks the file so you can decide what to keep. It looks scary, but it is just text with three markers.",
    },
    {
      type: "code",
      lang: "text",
      code: `<<<<<<< HEAD
<h1>My current version</h1>
=======
<h1>The incoming version</h1>
>>>>>>> feature-branch`,
    },
    {
      type: "ol",
      items: [
        "Open the file and find the markers.",
        "Keep the code you want, and delete the three marker lines.",
        "Save the file, then run git add on it.",
        "Finish with git commit (or git rebase --continue if you were rebasing).",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Take it slowly",
      text: "Run git status often. It tells you exactly what state you are in and usually what to do next.",
    },
    { type: "h2", text: "3. Committing on the wrong branch" },
    {
      type: "p",
      text: "You were working on main by accident. Do not panic. Create a new branch from where you are, which keeps your commits, and then move main back.",
    },
    {
      type: "code",
      lang: "bash",
      code: `git branch my-feature      # saves your commits on a new branch
git reset --hard origin/main   # puts main back to match the remote
git switch my-feature`,
    },
    {
      type: "callout",
      tone: "warn",
      title: "Careful with reset --hard",
      text: "It throws away uncommitted changes. Only run it after you have saved your work on another branch.",
    },
    { type: "h2", text: "4. Undoing the last commit" },
    {
      type: "p",
      text: "Committed too early or with a typo in the message? There are gentle options.",
    },
    {
      type: "code",
      lang: "bash",
      code: `git commit --amend -m "Better commit message"   # fix the last message

git reset --soft HEAD~1   # undo the commit but keep your changes staged`,
    },
    { type: "h2", text: "5. Committing files you should not" },
    {
      type: "p",
      text: "`node_modules`, `.env` files, build folders and editor settings do not belong in your repository. Create a `.gitignore` file at the start of every project.",
    },
    {
      type: "code",
      lang: "text",
      caption: ".gitignore",
      code: `node_modules
.next
dist
.env
.env.local
.DS_Store`,
    },
    {
      type: "p",
      text: "If you already committed a folder by mistake, remove it from tracking (without deleting it from your computer).",
    },
    {
      type: "code",
      lang: "bash",
      code: `git rm -r --cached node_modules
git commit -m "Stop tracking node_modules"`,
    },
    {
      type: "callout",
      tone: "warn",
      title: "If you committed a password or API key",
      text: "Removing it in a new commit is not enough, because it stays in the history. Treat that key as leaked: generate a new one immediately, then clean the history.",
    },
    { type: "h2", text: "6. Messy, unhelpful commit messages" },
    {
      type: "p",
      text: "Messages like “update”, “fix” or “asdf” make a project history useless. A good habit is to write the message as a short command describing what the commit does.",
    },
    {
      type: "ul",
      items: [
        "Add responsive navbar to landing page",
        "Fix button alignment on mobile",
        "Refactor card component to accept props",
      ],
    },
    { type: "h2", text: "My daily Git routine" },
    {
      type: "code",
      lang: "bash",
      code: `git status                 # where am I, what changed?
git add .                  # stage my changes
git commit -m "Add hero section"
git pull --rebase origin main
git push origin main`,
    },
    {
      type: "p",
      text: "Mistakes with Git are part of learning it. Each one you fix makes the next error less scary, and a clean GitHub profile with consistent commits tells employers that you are building steadily.",
    },
  ],
};
