module.exports = function(grunt)
{
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'src/style/stile.css': 'src/style/stile.less'
                }
            }
        },
        jshint: {
          all: ['Gruntfile.js', 'src/js/*.js']
        },
        watch: {
            less: {
                files: ['src/style/*.less'],
                tasks: ['less']
            },
            jshint: {
                files: ['src/js/*.js'],
                tasks: ['jshint']
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
