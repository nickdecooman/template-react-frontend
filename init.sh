#!/bin/bash
git config remote.template.tagOpt --no-tags
git tag -l | xargs git tag -d
git remote set-url --push template no_push

chmod -R u+x ./setup
rm -- "$0"
