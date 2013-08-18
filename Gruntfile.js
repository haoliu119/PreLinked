var LIVERELOAD_PORT = 35729;

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'handlebars'
// PLEASE don't delete the line starts with 'templateFramework'. Used by yo.

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      options: {
        spawn: false,
        livereload: LIVERELOAD_PORT
      },
      all: {
        options: { livereload: true },
        files: [
          '<%= yeoman.app %>/*.html',
          '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
        ],
        tasks: ['build-dev']
      },
      handlebars: {
        files: [
          '<%= yeoman.app %>/scripts/templates/*.hbs'
        ],
        tasks: ['handlebars']
      },
      express: {
        //server side watching
        files:  [ './backend/**/*.js', './backend/**/*.hbs'],
        tasks:  [ 'express:dev' ],
        options: {
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:3000'
      }
    },
    clean: {
      dist: ['.tmp', '<%= yeoman.dist %>/*'],
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        '!<%= yeoman.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%= connect.options.port %>/index.html']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/main.js': [
            '<%= yeoman.app %>/scripts/{,*/}*.js',
            '.tmp/scripts/{,*/}*.js'
          ]
        }
      }
    },
    stylus: {
      compile: {
        options: {
          paths: ['<%= yeoman.app %>/styles/']
          // urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
          // use: [
          //   require('fluidity') // use stylus plugin at compile time
          // ]
          // import: [    //  @import 'foo', 'bar/moo', etc. into every .styl file
          // 'foo',       //  that is compiled. These might be findable based on values you gave
          // 'bar/moo'    //  to `paths`, or a plugin you added under `use`
          // ]
        },
        files: {
          '<%= yeoman.app %>/styles/target.css': '<%= yeoman.app %>/styles/source.styl' // 1:1 compile
        }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/main.css': [
            '<%= yeoman.app %>/styles/*.css'
          ],
          '<%= yeoman.dist %>/styles/vendor.css':[
            '<%= yeoman.app %>/styles/vendor/*.css'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,txt}',
            '.htaccess',
            'images/{,*/}*.{webp,gif}'
          ]
        }]
      }
    },
    bower: {
      all: {
        rjsConfig: '<%= yeoman.app %>/scripts/main.js'
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'JST'
        },
        files: {
          'app/scripts/templates.js': ['<%= yeoman.app %>/scripts/templates/*.hbs']
        }
      }
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },
    express: {
      options: {
      // Override defaults here
      },
      dev: {
        options: {
          script: './backend/app.js'
        }
      }
    }
  });

  grunt.registerTask('createDefaultTemplate', function () {
    grunt.file.write('./app/scripts/templates.js', 'this.JST = this.JST || {};');
  });


  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('server', function () {
    grunt.task.run([
      'clean:server',
      'express:dev',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'createDefaultTemplate',
    'handlebars'
    // 'mocha'
  ]);

  //use this for development
  grunt.registerTask('build-dev', [
    'clean:dist',
    'createDefaultTemplate',
    'handlebars',
    'stylus',
    'useminPrepare',
    'htmlmin',
    'concat',
    'cssmin',
    'copy',
    'usemin'
  ]);

  //use this for deploy
  grunt.registerTask('build', [
    'clean:dist',
    'createDefaultTemplate',
    'handlebars',
    'stylus',
    'useminPrepare',
    'imagemin',
    'htmlmin',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'build-dev',
    'server'
  ]);
};
