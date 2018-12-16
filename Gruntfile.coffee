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
      miniprogram:
        src: [
          './miniprogram/release/*'
        ]

    concat:
      release:
        src: ['./src/exports/header.js','./src/internal/transportation/xhrpolling-min.js','./src/3rd/md5.min.js','./dist/RongIMLib.js','./src/exports/footer.js']
        dest: './dist/RongIMLib.js'
      miniprogram: 
        src: ['./src/exports/header.js','./src/internal/transportation/xhrpolling-min.js','./src/3rd/md5.min.js','./miniprogram/release/RongIMLib.js','./src/exports/footer.js']
        dest: './miniprogram/release/RongIMLib.js'

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
      build:
        files: [
          './src/**/*.ts'
          './src/**/*.js'
        ]
        tasks: [
          'clean:build'
          'typescript:build'
        ]
      miniprogram:
        files: [
          './src/**/*.ts'
          './src/**/*.js'
        ]
        tasks: [
          'clean:miniprogram'
          'typescript:miniprogram'
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
      miniprogram:
        options:
          module: 'amd'
          noImplicitAny: true
          removeComments: false
          sourceMap: false
          suppressImplicitAnyIndexErrors: false
          target: 'es3'
        src: ['./src/**/*.ts','!./src/extensions/*.ts','!./src/extensions/**/*.ts','!./src/util/script_loader.ts']
        dest: './miniprogram/release/RongIMLib.js'

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
    'watch:build'
  ]

  # grunt.registerTask 'default','mochaTest'
  # Build for release.
  grunt.registerTask 'release', [
    'clean:release'
    'typescript:release'
    'concat:release'
    'uglify:release'
    # 'typedoc:release'
    # 'jsdoc'
  ]

  # Build for miniprogram.
  grunt.registerTask 'miniprogram', [
    'clean:miniprogram'
    'typescript:miniprogram'
    'concat:miniprogram'
    'watch:miniprogram'
  ]