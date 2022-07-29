import ESBuild, { BuildOptions } from 'esbuild';
import path from 'path';

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

const mode = process.env.MODE || DEVELOPMENT;
const isDev = mode === DEVELOPMENT;
const isProd = mode === PRODUCTION;

const config:BuildOptions = {
    entryPoints: [path.resolve(__dirname, 'src/index.jsx')],
    outdir: path.resolve(__dirname, 'build'),
    entryNames: `bundle`,
    bundle: true,
    minify: isProd,
    sourcemap: isDev,
    tsconfig: path.resolve(__dirname, 'tsconfig.json')
}

if (isDev) {
    ESBuild.serve({
        port: 8080,
        servedir: path.resolve(__dirname, 'build')
    }, 
    config
).then(() => console.log('Server started on http://localhost:8080/'))}

if (isProd) {
    ESBuild.build(config)
}
