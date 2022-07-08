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

function replaceScopes(content: string, scopes: string[]): string {
  const joinScopes = scopes.map((s) => `'${s}'`).join(' | ');
  const PATTERN = /interface UtilLibSchema \{\n.*\n.*\n\}/gm;
  return content.replace(
    PATTERN,
    `interface UtilLibSchema {
  name: string;
  directory: ${joinScopes};
}`
  );
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

  const content = tree.read(
    'tools/generators/util-lib/index.ts',
    'utf-8'
  ) as string;
  const newContent = replaceScopes(content, scopes);

  tree.write('tools/generators/util-lib/index.ts', newContent);

  await formatFiles(tree);
}
