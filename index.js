const fs = require('fs');
const rimraf = require('rimraf');
const { getValueByParamName } = require('./utils/argsParser');

const startingPath = fs.realpathSync(getValueByParamName('-path', process.argv));

const projectFolders = fs.readdirSync(startingPath, { withFileTypes: true })
  .filter(v => !v.isFile());

for(let folder of projectFolders) {

  const folderFiles = fs.readdirSync(`${startingPath}/${folder.name}`);

  if(folderFiles.indexOf('.cleaner-protected') != -1)
    continue;

  rimraf.sync(`${startingPath}/${folder.name}/node_modules`);

}