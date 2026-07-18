# Git & GitHub Complete Notes
## Web Development Journey

---

# Git کیا ہے؟

Git ایک Version Control System ہے۔

اس کی مدد سے:
- Code کی History محفوظ رہتی ہے۔
- پرانا Version واپس لایا جا سکتا ہے۔
- Team کے ساتھ کام کیا جا سکتا ہے۔
- ہر تبدیلی Track ہوتی ہے۔

---

# GitHub کیا ہے؟

GitHub ایک Cloud Platform ہے جہاں Git Projects محفوظ کیے جاتے ہیں۔

فوائد:
- Online Backup
- Portfolio
- Team Collaboration
- Open Source Projects
- Companies Portfolio دیکھ سکتی ہیں۔

---

# Repository (Repo)

Repository = Project Folder

Example:

Web-Development-Journey/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

# Clone

GitHub Repository کو اپنے Computer یا Codespace میں Download کرنا۔

Command:

git clone repository-link

Example:

git clone https://github.com/username/project.git

---

# Status

Project کی موجودہ حالت دیکھنا۔

Command:

git status

---

# Add

Files کو Commit کے لیے تیار کرنا۔

Single File:

git add index.html

All Files:

git add .

---

# Commit

Project کا Save Point بنانا۔

Command:

git commit -m "Message"

Examples:

git commit -m "HTML Completed"

git commit -m "CSS Completed"

git commit -m "JavaScript Completed"

---

# Push

Local Code کو GitHub پر Upload کرنا۔

Command:

git push

---

# Pull

GitHub سے Latest Code لینا۔

Command:

git pull

---

# Fetch

Remote Repository کی نئی معلومات لینا۔

Command:

git fetch

---

# Branch

تمام Branches دیکھنا۔

git branch

نئی Branch بنانا۔

git branch feature

Branch تبدیل کرنا۔

git checkout feature

یا

git switch feature

---

# Merge

دو Branches کو ایک کرنا۔

git merge feature

---

# Log

تمام Commits دیکھنا۔

git log

مختصر انداز:

git log --oneline

---

# Remote

Remote Repository دیکھنا۔

git remote -v

---

# Restore

File کو پرانے Version میں واپس لانا۔

git restore filename

---

# Remove File

git rm filename

---

# Rename File

git mv oldname newname

---

# Ignore Files

.gitignore

Example:

node_modules/
.env
*.log

---

# README.md

ہر Repository میں README ہونا چاہیے۔

اس میں لکھیں:

Project Name
Description
Features
Installation
Author

---

# Git Workflow

ہر Project میں یہی Steps Follow کریں۔

git status

git add .

git commit -m "Describe Changes"

git push

---

# Common Commit Messages

Initial Commit

HTML Completed

CSS Completed

JavaScript Completed

Bootstrap Added

Responsive Design Added

React Started

Flask Backend Added

Database Connected

Portfolio Updated

Bug Fixed

README Updated

Project Completed

---

# Best Practices

✔ Meaningful Commit Messages لکھیں۔

✔ روزانہ Commit کریں۔

✔ README لازماً لکھیں۔

✔ Project Structure صاف رکھیں۔

✔ غیر ضروری Files Upload نہ کریں۔

✔ .gitignore استعمال کریں۔

---

# Useful Commands

git init

git clone

git status

git add .

git commit -m "Message"

git push

git pull

git fetch

git branch

git checkout

git switch

git merge

git log

git log --oneline

git remote -v

git restore

git rm

git mv

---

# GitHub Workflow

Create Repository

↓

Clone Repository

↓

Write Code

↓

git status

↓

git add .

↓

git commit -m "Message"

↓

git push

↓

Repeat

---

# Interview Questions

Q1. Git کیا ہے؟

Version Control System

Q2. GitHub کیا ہے؟

Cloud Platform for Git Repositories

Q3. Repository کیا ہے؟

Project Folder

Q4. Commit کیا ہے؟

Save Point

Q5. Push کیا ہے؟

Upload Code

Q6. Pull کیا ہے؟

Download Latest Code

Q7. Branch کیا ہے؟

Separate Development Line

Q8. Merge کیا ہے؟

Combine Branches

---

# Congratulations

Git & GitHub Course Completed

Ready for Bootstrap 🚀