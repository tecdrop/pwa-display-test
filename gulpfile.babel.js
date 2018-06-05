/* eslint-disable require-jsdoc, no-console */

import gulp from "gulp";
import del from "del";
import replace from "gulp-replace";

const displayModes = ["fullscreen", "standalone", "minimal-ui", "browser"];

export const clean = () => del(["dist/**", "!dist", "!dist/.git"]);

const copy = (src, dest) => gulp.src(src).pipe(gulp.dest(dest));

export function generate(done) {
    const templateTasks = displayModes.map(mode => {
        return () => gulp.src("src/template/*.*").pipe(replace("{display_mode}", mode)).pipe(gulp.dest(`dist/${mode}/`));
    });

    const scriptsTasks = displayModes.map(mode => { 
        return () => copy("src/template/scripts/*.js", `dist/${mode}/scripts/`);
    });

    const styleTasks = displayModes.map(mode => { 
        return () => copy("src/template/styles/*.css", `dist/${mode}/styles/`);
    });

    const manifestImageTasks = displayModes.map(mode => {
        return () => copy(`src/template/images/manifest/${mode}/*.png`, `dist/${mode}/images/manifest/`);
    });

    const iconTasks = displayModes.map(mode => {
        return () => copy("src/template/images/icons/*", `dist/${mode}/images/icons/`);
    });

    const commonTask = () => copy(["src/*", "!src/template"], "dist/");

    const tasks = [...templateTasks, ...scriptsTasks, ...styleTasks, ...manifestImageTasks, ...iconTasks, commonTask];
    return gulp.series(...tasks, seriesDone => {
        seriesDone();
        done();
    })();
}


const build = gulp.series(clean, generate);
gulp.task("build", build);
export default build;
