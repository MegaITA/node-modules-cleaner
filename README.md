# Node Modules Cleaner
A simple package to keep your disk free from heavy files.

#### How to use it
Install the package using npm
```
npm i -g modules-cleaner
```
Then you should be able to run the script by typing
```
modules-cleaner -path '<path>'
```
#### Protecting a folder from being cleaned
If you want to keep your `node_modules` folder, you can by easily adding the `.cleaner-ignore` file into the project's root folder.