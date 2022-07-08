import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, { name: schema.name });
  console.log('Here is the name I provided: ', schema.name);
  await formatFiles(tree);
  return () => {
    console.log('This will not be executed during dry-run');
    installPackagesTask(tree);
  };
}
