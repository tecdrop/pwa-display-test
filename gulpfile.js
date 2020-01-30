/* eslint-disable require-jsdoc, no-console */

const { src, dest, series } = require('gulp');
const del = require("del");
const replace = require("gulp-replace");

const displayModes = ["fullscreen", "standalone", "minimal-ui", "browser"];

const cleanDocs = () => del(["docs/**", "!docs", "!docs/.git"]);

const cleanWorkbox = () => del(["src/template/*.js", "src/template/*.map"]);

const copy = (source, destination) => src(source).pipe(dest(destination));

function generate(done) {
    const templateTasks = displayModes.map(mode => {
        return () => src("src/template/*.*").pipe(replace("{display_mode}", mode)).pipe(dest(`docs/${mode}/`));
    });

    const scriptsTasks = displayModes.map(mode => { 
        return () => copy("src/template/scripts/*.js", `docs/${mode}/scripts/`);
    });

    const styleTasks = displayModes.map(mode => { 
        return () => copy("src/template/styles/*.css", `docs/${mode}/styles/`);
    });

    const manifestImageTasks = displayModes.map(mode => {
        return () => copy(`src/template/images/manifest/${mode}/*.png`, `docs/${mode}/images/manifest/`);
    });

    const iconTasks = displayModes.map(mode => {
        return () => copy("src/template/images/icons/*", `docs/${mode}/images/icons/`);
    });

    const commonTask = () => copy(["src/*", "!src/template"], "docs/");

    const tasks = [...templateTasks, ...scriptsTasks, ...styleTasks, ...manifestImageTasks, ...iconTasks, commonTask];
    return series(...tasks, seriesDone => {
        seriesDone();
        done();
    })();
}

exports.default = series(cleanDocs, generate, cleanWorkbox);
