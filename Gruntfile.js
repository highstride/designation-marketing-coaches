module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: ['js/script.js'],
        dest: 'js/global.min.js'
      }
    },

    jshint: {
      src: ['Gruntfile.js', 'js/script.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,  // avoid some non-errors
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          require: true,
          define: true,
          requirejs: true,
          describe: true,
          expect: true,
          it: true
        }
      }
    },

    less: {
      production: {
        files: {
          'css/style.css': 'css/style.less'
        }
      }
    },

    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['style.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },

    watch: {
        scripts: {
          files: '<%= uglify.build.src %>',
          tasks: ['uglify', 'jshint']
        },
        css: {
          files: 'css/style.less',
          tasks: 'less'
        },
        cssmin: {
          files: 'css/style.css',
          tasks: 'cssmin'
        }
    }
  });

  // Load JSHint task
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['uglify', 'less', 'watch', 'cssmin']);


};