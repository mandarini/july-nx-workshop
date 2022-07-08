import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  normalizePath,
  getProjects,
  names,
} from '@nrwl/devkit';

function createAUselessFile(
  host: Tree,
  projectPath: string,
  fileName: string,
  isPlainJs: boolean
) {
  generateFiles(
    host,
    joinPathFragments(__dirname, './files'),
    normalizePath(projectPath),
    {
      myFileName: fileName,
      propOne: 'myNiceProp',
      typeOfOne: 'string',
      myInterfaceName: `My${names(fileName).className}`,
      isPlainJs,
      fileExt: isPlainJs ? 'js' : 'ts',
    }
  );
}

export default async function (
  tree: Tree,
  schema: { name: string; js: boolean }
) {
  const projectMap = getProjects(tree);
  projectMap.forEach((project) => {
    createAUselessFile(tree, project.root, schema.name, schema.js);
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
