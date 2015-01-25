## Organization

* /app (Unoptimized application files used for development)
* /dist (Distribution folder that holds the optimized site for deployment)

## Build system

The build system is using Gulp and partitioned into modules. The main Gulp file (gulpfile.js) lives at the root of the project. Inside it pulls it all of the tasks using the npm package "require-dir".

Within the gulp folder there's a config.js and a tasks folder. The config.js contains all of the configuration settings for the build system including directory names, paths, and file names. The tasks folder contains all of our Gulp tasks seperated into clean individual modules.