module.exports = function(grunt)
{
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'stile.css': 'stile.less'
                }
            }
        },
        jshint: {
          all: ['Gruntfile.js', '**/*.js']
        },
        watch: {
            less: {
                files: ['**/*.less'],
                tasks: ['less']
            },
            jshint: {
                files: ['**/*.js'],
                tasks: ['jshint']
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
