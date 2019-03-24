export default (inEnv) => {
  return require(`./build/${inEnv.TYPE}.js`).default(inEnv);
};
