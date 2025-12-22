# How to Create GitHub Issues from the Refactor Roadmap

This guide explains how to create the 31 GitHub issues documented in `GITHUB_ISSUES_TO_CREATE.md`.

## Quick Start

### Option 1: Manual Creation (Recommended for Small Teams)

**Time Required:** ~30-45 minutes

1. **Review the issues document**
   ```bash
   # Open the issues document
   cat GITHUB_ISSUES_TO_CREATE.md
   ```

2. **Create labels first** (one-time setup)
   - Go to: `https://github.com/PauloHSOliveira/new-portfolio/labels`
   - Create the following labels:
   
   **Phase Labels:**
   - `phase-1` (color: #0052CC - blue)
   - `phase-2` (color: #0747A6 - dark blue)
   - `phase-3` (color: #00B8D9 - cyan)
   - `phase-4` (color: #00875A - green)
   - `phase-5` (color: #FF5630 - red)
   - `phase-6` (color: #6554C0 - purple)
   
   **Priority Labels:**
   - `priority-high` (color: #DE350B - red)
   - `priority-medium` (color: #FF991F - orange)
   - `priority-low` (color: #00875A - green)
   
   **Category Labels:**
   - `foundation` (color: #5243AA)
   - `ui-components` (color: #00B8D9)
   - `state-management` (color: #FF991F)
   - `forms` (color: #00875A)
   - `blog` (color: #6554C0)
   - `integration` (color: #0052CC)
   - `testing` (color: #FF5630)
   - `performance` (color: #FFAB00)
   - `accessibility` (color: #36B37E)
   - `seo` (color: #6554C0)
   
   **Type Labels:**
   - `setup` (color: #0747A6)
   - `devtools` (color: #505F79)
   - `ui-design` (color: #00B8D9)
   - `theming` (color: #6554C0)
   - `components` (color: #00B8D9)
   - `features` (color: #00875A)
   - `optional` (color: #A5ADBA)
   - `audit` (color: #FF991F)

3. **Create milestones** (optional but recommended)
   - Go to: `https://github.com/PauloHSOliveira/new-portfolio/milestones`
   - Create 6 milestones:
     - `Phase 1: Foundation` (2 weeks)
     - `Phase 2: UI Component Library` (1 week)
     - `Phase 3: State & Forms` (1 week)
     - `Phase 4: Blog Implementation` (1 week)
     - `Phase 5: Features & Integration` (1 week)
     - `Phase 6: Testing & Quality` (1 week)

4. **Create each issue**
   - Go to: `https://github.com/PauloHSOliveira/new-portfolio/issues/new`
   - For each issue in `GITHUB_ISSUES_TO_CREATE.md`:
     1. Copy the **Title**
     2. Copy the **Description** and **Tasks** into the issue body
     3. Add the **Labels** listed
     4. Assign to appropriate **Milestone**
     5. Optionally assign to yourself or team members
     6. Click "Create issue"

### Option 2: Using GitHub CLI (Faster for Tech-Savvy Users)

**Time Required:** ~5-10 minutes (after initial setup)

1. **Install GitHub CLI** (if not already installed)
   ```bash
   # macOS
   brew install gh
   
   # Linux
   sudo apt install gh
   
   # Windows
   winget install GitHub.cli
   ```

2. **Authenticate**
   ```bash
   gh auth login
   ```

3. **Create labels (one-time)**
   ```bash
   # Navigate to repository
   cd /home/runner/work/new-portfolio/new-portfolio
   
   # Create phase labels
   gh label create "phase-1" --color "0052CC" --description "Phase 1: Foundation"
   gh label create "phase-2" --color "0747A6" --description "Phase 2: UI Components"
   gh label create "phase-3" --color "00B8D9" --description "Phase 3: State & Forms"
   gh label create "phase-4" --color "00875A" --description "Phase 4: Blog"
   gh label create "phase-5" --color "FF5630" --description "Phase 5: Integration"
   gh label create "phase-6" --color "6554C0" --description "Phase 6: Testing"
   
   # Create priority labels
   gh label create "priority-high" --color "DE350B" --description "High priority"
   gh label create "priority-medium" --color "FF991F" --description "Medium priority"
   gh label create "priority-low" --color "00875A" --description "Low priority"
   
   # Create category labels
   gh label create "foundation" --color "5243AA"
   gh label create "ui-components" --color "00B8D9"
   gh label create "state-management" --color "FF991F"
   gh label create "forms" --color "00875A"
   gh label create "blog" --color "6554C0"
   gh label create "integration" --color "0052CC"
   gh label create "testing" --color "FF5630"
   gh label create "performance" --color "FFAB00"
   gh label create "accessibility" --color "36B37E"
   gh label create "seo" --color "6554C0"
   
   # Create type labels
   gh label create "setup" --color "0747A6"
   gh label create "devtools" --color "505F79"
   gh label create "ui-design" --color "00B8D9"
   gh label create "theming" --color "6554C0"
   gh label create "components" --color "00B8D9"
   gh label create "features" --color "00875A"
   gh label create "optional" --color "A5ADBA"
   gh label create "audit" --color "FF991F"
   ```

4. **Create issues using a script**
   
   Unfortunately, GitHub CLI doesn't support bulk issue creation from a document directly. You'll need to either:
   - Create issues manually (recommended)
   - Write a custom script to parse `GITHUB_ISSUES_TO_CREATE.md` and create issues

### Option 3: Using a Custom Script (Most Automated)

**Time Required:** ~2-5 minutes (after script creation)

Create a Node.js script to automate issue creation:

```javascript
// create-issues.js
const { execSync } = require('child_process');
const fs = require('fs');

// Read the issues document
const content = fs.readFileSync('GITHUB_ISSUES_TO_CREATE.md', 'utf-8');

// Parse issues (this is a simplified example)
// You would need to implement proper parsing logic

function createIssue(title, body, labels) {
  const labelString = labels.map(l => `"${l}"`).join(',');
  const command = `gh issue create --title "${title}" --body "${body}" --label ${labelString}`;
  
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`Created: ${title}`);
  } catch (error) {
    console.error(`Failed to create: ${title}`);
  }
}

// Example usage:
// createIssue(
//   "Phase 1.1: Project Initialization",
//   "Initialize the project foundation...",
//   ["phase-1", "foundation", "priority-high", "setup"]
// );

console.log('Note: You need to implement the parsing logic');
```

Run:
```bash
node create-issues.js
```

## Recommended Workflow

1. **Week 0: Setup**
   - [ ] Create all labels
   - [ ] Create all milestones
   - [ ] Create all 31 issues
   - [ ] Review and organize issues

2. **Week 1-2: Phase 1**
   - [ ] Work on Foundation issues (#1-5)
   - [ ] Check off completed tasks
   - [ ] Close issues when complete

3. **Week 2: Phase 2**
   - [ ] Work on UI Component issues (#6-9)
   - [ ] Update progress regularly

4. **Week 3: Phase 3**
   - [ ] Work on State & Forms issues (#10-13)

5. **Week 4: Phase 4**
   - [ ] Work on Blog issues (#14-19)
   - [ ] This is the priority feature

6. **Week 5: Phase 5**
   - [ ] Work on Integration issues (#20-24)

7. **Week 6: Phase 6**
   - [ ] Work on Testing & Quality issues (#25-31)
   - [ ] Final review and deployment

## Tips for Managing Issues

1. **Use Projects**
   - Create a GitHub Project board
   - Add all issues to the project
   - Use columns: "Backlog", "In Progress", "Review", "Done"

2. **Use Assignees**
   - Assign issues to team members
   - Or assign to yourself to track your work

3. **Link Related Issues**
   - Use "depends on #X" in issue descriptions
   - Link PRs to issues with "closes #X"

4. **Regular Updates**
   - Comment on issues with progress
   - Check off completed tasks
   - Update labels if priority changes

5. **Close When Complete**
   - Mark all checkboxes as done
   - Link to the PR that implemented it
   - Close the issue

## Issue Creation Checklist

When creating each issue:
- [ ] Title is clear and descriptive
- [ ] Body includes all tasks from document
- [ ] All labels are applied
- [ ] Milestone is set
- [ ] Assignee is set (if applicable)
- [ ] Reference to source documentation is included

## FAQ

**Q: Do I need to create all 31 issues at once?**
A: No, you can start with Phase 1 issues and create others as you progress. However, creating all issues upfront helps with planning.

**Q: Can I modify the issues after creation?**
A: Yes! Issues are flexible. Add tasks, change labels, or update descriptions as needed.

**Q: What if I want to skip some phases?**
A: The roadmap is comprehensive. For an MVP, focus on Phase 1 (Foundation) and Phase 4 (Blog). Mark other issues as "optional" or close them.

**Q: Should I use milestones?**
A: Recommended but not required. Milestones help track progress across phases.

**Q: Can I reorder phases?**
A: Some phases have dependencies. Phase 1 should be first. Phase 4 (Blog) depends on Phase 1 and 2. Phase 6 should be last.

## Next Steps After Creating Issues

1. **Review all issues** - Make sure they make sense for your context
2. **Prioritize** - Decide which issues to tackle first
3. **Start coding** - Begin with Phase 1, Issue 1
4. **Update regularly** - Check off tasks as you complete them
5. **Close completed issues** - When all tasks are done and tested

## Need Help?

- **Documentation:** See `START_HERE.md`, `PROMPT_REFATORACAO_PORTFOLIO.md`
- **Quick Reference:** See `QUICK_REFERENCE.md` for coding patterns
- **AI Assistance:** Use `.cursor/rules.md` or `.copilot/instructions.md`

---

**Ready to start?** Open `GITHUB_ISSUES_TO_CREATE.md` and begin creating your issues! 🚀
