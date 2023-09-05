import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const sharedDirPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedDir = project.getDirectory(sharedDirPath);
const componentsDirs = sharedDir?.getDirectories();


const isAbsolute = (value: string) => {
    const layers = ['app', 'entities', 'pages', 'shared', 'features', 'widgets'];
    return layers.some(layer => value.startsWith(layer));
};


componentsDirs?.forEach((dir) => {
    const indexFilePath = `${dir.getPath()}/index.ts`;
    const indexFile = dir.getSourceFile(indexFilePath);
    if(!indexFile){
        const sourceCode = `export * from './${dir.getBaseName()}';`;
        const newIndexFile = dir.createSourceFile(indexFilePath, sourceCode, {
            overwrite: true,
        });
        newIndexFile.save();
    }
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');
        const segments = valueWithoutAlias.split('/');
        const isSharedLayer = segments[0] === 'shared';
        const isUISegment = segments[1] === 'ui';

        if(isAbsolute(valueWithoutAlias) && isSharedLayer && isUISegment){
            const newPath = segments.slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${newPath}`);
        }  
    });
});
project.save();