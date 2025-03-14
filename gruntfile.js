
module.exports = function(grunt){
    // TASK CONFIGURATION
    grunt.initConfig({
        // TASK COMPRESS IMAGES
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'source/img/',
                    src: ['**/*.jpg' , '**/*.png', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.ico'],
                    dest: 'build/img'
                }]
            }
        },
        // TASK COMPRESS SCSS
        sass: {
            options: {
                style: 'compressed',
            },
            dist: {
                files: {
                    'build/css/main.min.css': 'source/scss/main.scss'
                }
            }
        },
        // TASK COMPRESS JS
        uglify: {
            my_target: {
                files: {
                    'build/js/main.min.js': ['source/js/*.js']
                }
            }
        },
        // TASK COMPRESS HTML
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.min.html': 'source/index.html'
                }
            }
        },

        watch : {
            options: {
                livereload: true
            },
            imagemin: {
                files: ['source/img/**/*'],
                tasks: ['imagemin']
            },
            sass: {
                files: ['source/scss/**/*.scss'],
                tasks: ['sass']
            },
            uglify: {
                files: ['source/js/*.js'],
                tasks: ['uglify']
            },
            htmlmin: {
                files: ['*.html'],
                tasks: ['htmlmin']
            }
        }

    })

    grunt.loadNpmTasks('grunt-contrib-imagemin')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('dev', ['watch'])
    grunt.registerTask('default', ['imagemin', 'htmlmin', 'uglify', 'sass'])

}