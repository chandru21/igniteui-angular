import * as path from 'path';

import { EmptyTree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

describe('Update 9.0.1', () => {
    let appTree: UnitTestTree;
    const _schematicRunner = new SchematicTestRunner('ig-migrate', path.join(__dirname, '../migration-collection.json'));
    const configJson = {
        defaultProject: 'testProj',
        projects: {
            testProj: {
                root: '/',
                sourceRoot: '/testSrc'
            }
        },
        schematics: {
            '@schematics/angular:component': {
                prefix: 'appPrefix'
            }
        }
      };

    const migrationName = 'migration-14';

    beforeEach(() => {
        appTree = new UnitTestTree(new EmptyTree());
        appTree.create('/angular.json', JSON.stringify(configJson));
    });

    it('Should remove $base-color', async () => {
        appTree.create(
            `/testSrc/appPrefix/component/test.component.scss`,
`$typography: igx-typography(
    $base-color: white,
    $font-family: null,
    $type-scale: null
);
`);
    const tree = await _schematicRunner
        .runSchematicAsync(migrationName, {}, appTree)
        .toPromise();

        expect(tree.readContent('/testSrc/appPrefix/component/test.component.scss'))
        .toEqual(
`$typography: igx-typography(
    $font-family: null,
    $type-scale: null
);
`);
    });
});
