import { Rule, SchematicContext } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { getProjectFromWorkspace } from '../utils';

function addModuleToImports(options: any): Rule {
	return (host: Tree, context: SchematicContext) => {
		const workspace = getWorkspace(host);
		const project = getProjectFromWorkspace(workspace);
	};
}
