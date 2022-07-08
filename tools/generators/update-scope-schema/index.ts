import {
  formatFiles,
  getProjects,
  names,
  ProjectConfiguration,
  Tree,
  updateJson,
} from '@nrwl/devkit';

function getScopes(projectMap: Map<string, ProjectConfiguration>) {
  const projects: any[] = Array.from(projectMap.values());
  const allScopes: string[] = projects
    .map((project) =>
      project.tags
        // take only those that point to scope
        .filter((tag: string) => tag.startsWith('scope:'))
    )
    // flatten the array
    .reduce((acc, tags) => [...acc, ...tags], [])
    // remove prefix `scope:`
    .map((scope: string) => scope.slice(6));
  // remove duplicates
  return Array.from(new Set(allScopes));
}

export default async function (tree: Tree) {
  const scopes = getScopes(getProjects(tree));

  updateJson(tree, 'tools/generators/util-lib/schema.json', (schemaJson) => {
    schemaJson.properties.directory['x-prompt'].items = scopes.map((scope) => ({
      value: scope,
      label: names(scope).className,
    }));
    schemaJson.properties.directory.enum = scopes;
    return schemaJson;
  });

  await formatFiles(tree);
}
