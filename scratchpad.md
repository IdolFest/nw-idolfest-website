# How I got this thing to cooperate

1. Use linux. There are filenames windows does not like and it causes multiple headaches
2. Use node 16.15.0 as noted in readme
3. Install an OLDER gatsby-cli globally using `npm install -g gatsby-cli@3.6`
4. (Skip, this probably did not help) Install an OLDER gatsby globally so it stops whining, using `npm install -g gatsby@3.6.2`
5. Update `package.json` to remove the ^ from every gatsby package, then re-run `npm install`
6. Run `npm run develop` INSTEAD OF gatsby develop, to use local gatsby-cli instead of global one (this was a my-system issue where I had an older node for root. Ugh...)
7. Undo installing gatsby-cli and gatsby globally (`npm uninstall -g gatsby gatsby-cli`)
8. `npm uninstall gatsby-recipes` to try to fix stupid graphql exception in schema creation (it didn't work)
9. Force a version of graphql to make whatever module is whining freaking stop: `npm install --save graphql@14.7.0`
10. Find every single use of `graphql` in `package-lock.json` and point it to that version. Also look for `graphql-15` to get modules
11.  Demolish `node_modules`, then reinstall `npm install`
12. Yell at the moon
12. Remove all updates to `package-lock.json` using checkout
14. Add `"resolutions": {"graphql": "14.7.0"},` to package.json
13. Run `npx npm-force-resolutions` and pray it rewrites package-lock.json better than I did
14. `rm -rf node_modules` then `npm install`
15. Yell some more 
16. Entire node_modules folder is hosed, what did this even do...
17. Evaporate `package-lock.json` , npm install again
18. Run `npm ls graphql` (crying optional, but not discouraged)
19. Hurl rocks skyward
20. Run `nmp install graphql@15.8.0`
21. Repeat the `npm ls graphql` command and hope there's less duplication...
22. It's all red, that must be good right? ... wait it actually is.
23. Well, we got here anyway. Shout "FUCK OFF SPACE EGG" 
24. Repeat until dawn