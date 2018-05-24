/* eslint-disable require-jsdoc, no-console */

import gulp from "gulp";
import del from "del";
import replace from "gulp-replace";

const displayModes = ["fullscreen", "standalone", "minimal-ui", "browser"];

export const clean = () => del(["dist"]);

const copy = (src, dest) => gulp.src(src).pipe(gulp.dest(dest));

export function generate(done) {
    const templateTasks = displayModes.map(mode => {
        return () => gulp.src("src/template/*.*").pipe(replace("{display_mode}", mode)).pipe(gulp.dest(`dist/${mode}/`));
    });

    const styleTasks = displayModes.map(mode => { 
        return () => copy("src/template/styles/*.css", `dist/${mode}/styles/`); 
    });

    const imageTasks = displayModes.map(mode => {
        return () => copy(`src/template/images/manifest/${mode}/*.png`, `dist/${mode}/images/manifest/`);
    });

    const commonTask = () => copy(["src/*", "!src/template"], "dist/");

    const tasks = [...templateTasks, ...styleTasks, ...imageTasks, commonTask];
    return gulp.series(...tasks, seriesDone => {
        seriesDone();
        done();
    })();
}


const build = gulp.series(clean, generate);
gulp.task("build", build);
export default build;
