#!/bin/bash
set -e
set -u

if [ $# == 0 ]; then
    echo "Usage: `basename $0` [major | minor | patch | prerelease]"
    exit
fi

BUMP=$1
DEPLOY_DIR="dist/storefrontapp"

echo "Bumping version to $BUMP"
NEW_VERSION=`npm version $BUMP --no-git-tag-version`
echo "New version: $NEW_VERSION"

sh dist-storefrontshellapp.sh

echo "publishing version $BUMP"
npm publish dist/storefrontshellapp.tgz

cd $PROJECT_DIR
git commit -am"Bumping version to $NEW_VERSION"
git tag storefrontapp-$NEW_VERSION

echo "Pushing from $PWD"
# git push origin develop --tags
