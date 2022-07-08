import { Tree, updateJson } from '@nrwl/devkit';

export default async function (tree: Tree) {
  updateJson(tree, 'nx.json', (nxJson) => {
    nxJson.defaultProject = 'api';
    return nxJson;
  });
}
