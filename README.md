# Debug config

To be placed in `{projectRootFolder}/.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Strapi",
      "request": "launch",
      "runtimeArgs": ["run-script", "develop:backend"],
      "runtimeExecutable": "npm",
      "skipFiles": ["<node_internals>/**"],
      "type": "pwa-node",
      "localRoot": "${workspaceFolder}",
      "port": 9229
    }
  ]
}
```
