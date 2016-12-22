const APP_DIR = 'app';
const DEST_DIR = 'dist';
const DOCS_DIR = 'docs';
const REPORTS_DIR = 'reports';
const ASSETS_DIR = 'assets';
const TEST_CONFIGS_DIR = 'test-configs';
const COMPONENTS_DIR = `${APP_DIR}/components`;
const APP_SPEC_SRC = `${APP_DIR}/**/*.spec.js`;
const E2E_SPEC_SRC = 'e2e-tests/**/*.spec.js';
const BUILD_SCRIPT = 'gulpfile.babel.js';
const SASS_SRC = `${ASSETS_DIR}/**/*.scss`;
const HTML_SRC = `${APP_DIR}/**/*.html`;
const ANGULAR_PARTIALS = `${APP_DIR}/components/**/*.html`;
const FONTS_SRC = `${ASSETS_DIR}/fonts/**/*!(.txt)`;
const ENTRY = `${APP_DIR}/app.js`;
const SVG_SRC = `${ASSETS_DIR}/images/svg-bundle/**/*.svg`;
const INLINE_SVG_SRC = `${ASSETS_DIR}/images/inline-svg/**/*.svg`;

const IMAGES_SRC = [
    `${ASSETS_DIR}/images/**/*`,
    `!${ASSETS_DIR}/images/inline-svg/`,
    `!${ASSETS_DIR}/images/svg-bundle/`,
    `!${SVG_SRC}`,
    `!${INLINE_SVG_SRC}`
];

const APP_JS = [
    `${APP_DIR}/**/*.js`
];

const JS_SRC = [
    `${APP_DIR}/**/*.js`,
    `!${APP_DIR}/**/*.spec.js`
];

const ALL_JS = [
    `${APP_DIR}/**/*.js`,
    `${E2E_SPEC_SRC}`
];

const TODO_SRC = [
    `${ALL_JS}`,
    `${TEST_CONFIGS_DIR}/**/*.js`,
    `./*.js`
];

const SIZE_SRC = [
    `${DEST_DIR}/**/*`,
    `!${DEST_DIR}/images/favicon/**/*`, // ignore favicons
    `!${DEST_DIR}/components/**/*`, // ignore views since they are bundled with app.js
    `!${DEST_DIR}/**/*.map`, // ignore map files
    `!${DEST_DIR}/**/app.js`, // ignore unminified assets
    `!${DEST_DIR}/**/app.css`, // ignore unminified assets
    `!${DEST_DIR}/fonts/**/*` // ignore; only a small subset of fonts will be pulled in
];

const SASS_IGNORE_RESET = [
    `${SASS_SRC}`,
    `!${ASSETS_DIR}/**/*normalize.scss`
];

const EXTERNALS = [
  'angular-ui-router',
  'angular-loading-bar',
  'angular-messages',
  'angular-sanitize',
  'angular-aria',
  'angular-animate',
  'angular',
  'moment',
  'jquery',
  'angular-resource',
  'angular-mocks'
];

export default {
    src: {
        dir: APP_DIR,
        js: JS_SRC,
        partials: ANGULAR_PARTIALS,
        images: IMAGES_SRC,
        svg: SVG_SRC,
        inlineSvg: INLINE_SVG_SRC,
        fonts: FONTS_SRC,
        html: HTML_SRC,
        e2e: E2E_SPEC_SRC,
        sass: SASS_SRC,
        unitTests: APP_SPEC_SRC,
        size: SIZE_SRC,
        allJs: ALL_JS,
        entry: ENTRY,
        sassIgnoreReset: SASS_IGNORE_RESET,
        appJs: APP_JS,
        todo: TODO_SRC
    },
    dest: {
        dir: DEST_DIR,
        images: `${DEST_DIR}/images`,
        fonts: `${DEST_DIR}/fonts`,
        html: `${DEST_DIR}`,
        css: `${DEST_DIR}/css`,
        components: `${COMPONENTS_DIR}`,
        js: `${DEST_DIR}/js`,
        docs: `${DOCS_DIR}`,
        plato: `${REPORTS_DIR}/plato`
    },
    configs: {
        scssLint: '.scsslint.yml'
    },
    buildScript: BUILD_SCRIPT,
    externals: EXTERNALS
};