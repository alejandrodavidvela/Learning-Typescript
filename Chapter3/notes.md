1. Watchmode - is a way to tell typescript to always look at the ts file for changes. really only works if you have just one file to target.

    tsc app.ts -w

2. Compiling the Entire Project / Multiple Files

    tsc --init (this only needs to be run once. everything in this folder is managed by ts. creates a tsconfig.json file)
    tsc -w (this will now look at all the files and update on save)

3. Including and Excluding Files

    tsconfig.json - this file tell ts how it should compile.
    at the end of the config file object. Exlude will not include listed files in compiling. Include will compile only what is listed here and nothing else. 
    {{},
    "exclude": [
        "analytics.ts",
        "*.dev.ts" (This wildcard will exclude any file with .dev.ts ending)
    ],
    "include": [  
        "app.ts" (This will make sure that only app.ts will compile and nothing eles even if not included in exclude)
    ]}

4. Setting a Compilation Target

    Setting for how it is compiled. 

    Basic Options

    1. "target" this tells ts which version you want to compile the code. 
    2. "lib" specify which default option libraries are included with the target type. commented out it has the default list dom, es6, dom.iterable, scripthost.
    3. "allowJS" will allow js files to be compiled even without a .ts file extension
    4. "checkJS" will report errors in js files like ts files
    5. "sourceMap" this helps us with debug and developement
    6. "outDir" and "rootDir" source folder (outDir - This is cool cause you can change the output location of the js files created after ts compile. normally a dist dir at root. video3.9)( rootDir - set where you input files will live.)
    7. "noEmitOnError": (default false) - if set to true then js files will not be compiled if there are errors in the ts files. 