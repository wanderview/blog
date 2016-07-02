const gulp = require('gulp');
const markdown = require('gulp-markdown');
const rename = require('gulp-rename');

const postPrefixRegex = /^(\d+)-(\d+)-(\d+)-/;

gulp.task('default', _ => {
  return gulp.src('posts/**.markdown')
    .pipe(markdown())
    .pipe(rename(path => {
      let newName = path.basename.replace(postPrefixRegex, '');
      let year = RegExp.$1;
      let month = RegExp.$2;
      let day = RegExp.$3;
      path.basename = newName;
      path.dirname = `blog/${year}/${month}/${day}`
    }))
    .pipe(gulp.dest('dist'));
});
