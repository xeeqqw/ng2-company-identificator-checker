const map: any = {

};

const packages: any = {

};


const barrels: string[] = [
  'core',
  'common',
  'compiler',
  'http',
  'forms',
  'router',
  'platform-browser',
  'platform-browser-dynamic',
];

const defaultPackages: any = {
    'app': { main: 'main.js',  defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
};
barrels.forEach((barrelName: string) => {
  defaultPackages['@angular/' + barrelName] = { main: 'bundles/' + barrelName + '.umd' };
});

//Тут нет umd
//packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'app': 'app'
  },
  packages: defaultPackages
});

// Apply the user's configuration.
System.config({ map, packages });
