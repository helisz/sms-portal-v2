
app.config(function($translateProvider,$translatePartialLoaderProvider ) {
    /*
     $translateProvider.useLoader('$translatePartialLoader', {
     urlTemplate: './translation/{lang}/{part}.json'
     });
     */

    // configures staticFilesLoader
    $translateProvider.useStaticFilesLoader({
        prefix: 'translation/locale-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useLocalStorage();
    $translateProvider.forceAsyncReload(true);

});
