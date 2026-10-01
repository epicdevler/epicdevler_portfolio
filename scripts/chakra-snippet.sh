set -e


read -rp "Enter snippets to install (space separated or empty for defaults): " SNIPPETS
pnpm dlx @chakra-ui/cli snippet add $SNIPPETS --outdir ./src/components

echo ""
echo "Installed snippets $SNIPPETS"