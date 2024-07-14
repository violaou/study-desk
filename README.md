# study-desk
### Personal Website



### Run
Local: `npm run start`

Build: `npm run build`

Deploy: `firebase deploy --only hosting `


----
### Troubleshooting

-  on deploy, I see:
    ```
    Error: Assertion failed: resolving hosting target of a site with no site name or target name. This should have caused an error earlier
    ```
    Run: `firebase login --reauth`
`
