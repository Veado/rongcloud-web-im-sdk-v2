module.exports = (grunt) ->
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    jsdoc:
      dist:
        src:['dist/RongIMLib.js']
        options:
          destination : 'jsdoc'
    # Task configuration.
    clean:
      build:
        src: [
          './build/*'
          './build/.*'
          './build/*.*'
        ]
      release:
        src: [
          './dist/*'
          './dist/.*'
          './dist/*.*'
        ]

    concat:
      dist:
        src: ['./src/exports/header.js','./src/internal/transportation/xhrpolling-min.js','./src/3rd/md5.min.js','./dist/RongIMLib.js','./src/exports/footer.js']
        dest: './dist/RongIMLib.js'

    connect:
      server:
        options:
          keepalive: true
          port: 8282
          base: '.'

    uglify:
      release:
        options:
          sourceMap: false
        src: './dist/RongIMLib.js'
        dest: './dist/RongIMLib.min.js'

    watch:
      options:
        spawn: false
        livereload: true
      compile:
        files: [
          './src/**/*.ts'
          './src/**/*.js'
        ]
        tasks: [
          'clean:build'
          'typescript:build'
        ]

    karma:
      unit:
        configFile: 'karma.conf.coffee'

    typedoc:
      release:
        options:
          module: 'commonjs'
          out: './docs'
          name: 'RongCloud'
          target: 'es3'
        src: ['./src/**/*.ts']

    typescript:
      build:
        options:
          module: 'amd'
          noImplicitAny: true
          removeComments: false
          sourceMap: true
          suppressImplicitAnyIndexErrors: false
          target: 'es3'
        src: './src/**/*.ts'
        dest: './miniprogram/build'
      release:
        options:
          module: 'amd'
          noImplicitAny: true
          removeComments: false
          sourceMap: false
          suppressImplicitAnyIndexErrors: false
          target: 'es3'
        src: ['./src/**/*.ts','!./src/extensions/*.ts','!./src/extensions/**/*.ts','!./src/util/script_loader.ts']
        dest: './dist/RongIMLib.js'

  # These plugins provide necessary tasks.
  # grunt.loadNpmTasks 'google-closure-compiler'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-typedoc'
  grunt.loadNpmTasks 'grunt-typescript'
  grunt.loadNpmTasks 'grunt-jsdoc'
  # Build for dev.
  grunt.registerTask 'build', [
    'clean:build'
    'typescript:build'
    'watch'
  ]

  # grunt.registerTask 'default','mochaTest'
  # Build for release.
  grunt.registerTask 'release', [
    'clean:release'
    'typescript:release'
    'concat'
    'uglify:release'
    # 'typedoc:release'
    # 'jsdoc'
  ]
