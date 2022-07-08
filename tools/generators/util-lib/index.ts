import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export interface UtilLibSchema {
  name: string;
  directory: 'api' | 'malone' | 'shared' | 'store' | 'video-games';
}

export default async function (tree: Tree, schema: UtilLibSchema) {
  await libraryGenerator(tree, {
    name: `util-${schema.name}`,
    directory: schema.directory,
    tags: `type:util,scope:${schema.directory}`,
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
