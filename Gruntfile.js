module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    jshint: {
      options: {
        "curly": true,
        "eqnull": true,
        "eqeqeq": true,
        //"undef": true,
        //"unused": true,
        "latedef": true,
        "camelcase": true,
        "strict": true,
        "newcap": true,
        "maxcomplexity": 3,
        "globals": {}
      },
      all: ['src/*.js']
    },

    connect: {
      livereload: {
        options: {
          port: 9000,
          hostname: 'localhost',
          base: '.',
          open: true,
          livereload: true
        }
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: ['examples/*.html', 'src/*.js', 'src/*.css']
      },
      jshint: {
        files: ['src/*.js'],
        tasks: ['jshint']
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['connect:livereload', 'watch']);

};
