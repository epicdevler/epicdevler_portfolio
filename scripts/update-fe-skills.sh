#!/bin/bash
set -e

REPO="git@github.com:epicdevler/claude-fe-skills.git"
BRANCH="main"
TMP_DIR="/tmp/claude-skills-update"

SKILLS=(
  "frontend-engineer"
  "fe-architect"
  "fe-ui-engineer"
  "fe-onboarding"
  "fe-code-reviewer"
  "fe-release-manager"
  "fe-performance"
  "ui-ux"
)

echo "Pulling latest skills from GitHub..."
rm -rf $TMP_DIR
git clone --depth 1 --branch $BRANCH $REPO $TMP_DIR

echo ""
echo "Installing skills..."
for skill in "${SKILLS[@]}"; do
  echo "  → $skill"
  pnpm dlx skills add "$TMP_DIR/skills/$skill" -a claude-code --yes
done

rm -rf $TMP_DIR
echo ""
echo "All skills updated. Restart Claude Code to apply changes."