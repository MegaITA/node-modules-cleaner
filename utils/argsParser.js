module.exports = {

  getValueByParamName: (paramName, args) => {

    return args[args.indexOf(paramName)+1];
  
  }

}