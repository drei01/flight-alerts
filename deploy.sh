#!/bin/sh
git push origin `git subtree split --prefix build/client master`:gh-pages --force
