import gulp from 'gulp'; // Usando ESM import
import sass from 'gulp-sass';
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

const browser = browserSync.create();
const sassCompiler = sass(dartSass);

// Compilando o Sass e adicionando autoprefixer
function compilaSass() {
  return gulp.src('scss/*.scss')
    .pipe(sassCompiler())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browser.stream());
}

// Concatenando e processando CSS de plugins
function pluginsCSS() {
  return gulp.src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browser.stream());
}

// Concatenando, transpilando e minificando JavaScript
function gulpJs() {
  return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browser.stream());
}

// Concatenando JavaScript de plugins
function pluginsJs() {
  return gulp.src(['./js/lib/axios.min.js', './js/lib/aos.min.js', './js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browser.stream());
}

// Iniciando o servidor com BrowserSync
function browserSyncServe(cb) {
  browser.init({
    server: {
      baseDir: './'
    }
  });
  cb();
}

// Observando alterações nos arquivos para recarregar o servidor automaticamente
function watchFiles() {
  gulp.watch('scss/*.scss', compilaSass);
  gulp.watch('css/lib/*.css', pluginsCSS);
  gulp.watch('*.html').on('change', browser.reload);
  gulp.watch('js/scripts/*.js', gulpJs);
  gulp.watch('js/lib/*.js', pluginsJs);
}

// Definindo tarefas para build e watch
const build = gulp.series(compilaSass, pluginsCSS, gulpJs, pluginsJs);
const watch = gulp.parallel(watchFiles, browserSyncServe);

// Exportando as tarefas
export { build, watch };

// Tarefa default (executada com `npx gulp`)
gulp.task('default', watch);
