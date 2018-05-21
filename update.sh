#!/bin/bash
npm run-script build
npm run-script run
git add generated
git commit -m 'Daily update'
git push

