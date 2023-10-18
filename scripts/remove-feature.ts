import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isAriticleRatingEnabled
const featureState = process.argv[3]; // example on/off

if (!removedFeatureName) throw new Error('Please specify feature name');

if (!featureState) throw new Error('Please specify feature state (on or off)');

if (featureState !== 'on' && featureState !== 'off') throw new Error('Feature state should be "on" or "off"');

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isToggleFeatures = (node: Node) => {
    let isToggleFeatures = false;
    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
};

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFeatures(node)) {
            const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

            const featureNameProp = objectOptions?.getProperty('name');
            const onFuntionProp = objectOptions?.getProperty('on');
            const offFuntionProp = objectOptions?.getProperty('off');

            const featureName = featureNameProp
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            const onFunction = onFuntionProp?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
            const offFunction = offFuntionProp?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);

            if (featureName !== removedFeatureName) return;

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }

            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();
