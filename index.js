const fs = require('fs');
const rimraf = require('rimraf');
const { getValueByParamName } = require('./utils/argsParser');

if(process.argv.length <= 2)
  return console.log('You must specify a projects folder directory.\nCommand usage: modules-cleaner -path <path>')

try {
  
  const startingPath = fs.realpathSync(getValueByParamName('-path', process.argv));

} catch (error) {

  if(error.code === 'ENOENT')
    return console.log('The provided directory is not valid.');

}

const projectFolders = fs.readdirSync(startingPath, { withFileTypes: true })
  .filter(v => !v.isFile());

for(let folder of projectFolders) {

  const folderFiles = fs.readdirSync(`${startingPath}/${folder.name}`);

  if(folderFiles.indexOf('.cleaner-protected') != -1)
    continue;

  rimraf.sync(`${startingPath}/${folder.name}/node_modules`);

}