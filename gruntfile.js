
module.exports = function(grunt){
    // TASK CONFIGURATION
    grunt.initConfig({
        // TASK COMPRESS IMAGES
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/source/img/',
                    src: ['**/*.{png, jpg, jpeg, gif}'],
                    dest: 'assets/build/img'
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
                    'assets/build/css/style.css': 'assets/source/scss/main.scss'
                }
            }
        },
        // TASK COMPRESS JS
        uglify: {
            my_target: {
                files: {
                    'assets/build/js/main.min.js': ['assets/source/js/*.js']
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
                    'index.min.html': 'index.html'
                }
            }
        },

        watch : {
            options: {
                livereload: true
            },
            imagemin: {
                files: ['assets/source/img/**/*.{png, jpg, jpeg, gif}'],
                tasks: ['imagemin']
            },
            sass: {
                files: ['assets/source/scss/**/*.scss'],
                tasks: ['sass']
            },
            uglify: {
                files: ['assets/source/js/*.js'],
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

    grunt.registerTask('default', ['watch'])

}