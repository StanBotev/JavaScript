function main(input) {


    let data = new Map();
    let cacheData = new Map();

    for (let i = 0; i < input.length; i++) {
        let modulePattern =/^\$app\=\'(.+)\'$/g;
        let controlerPattern =/^\$controller\=\'(.+)\'\&app\=\'(.+)\'$/g;
        let modelPattern =/^\$model\=\'(.+)\'\&app\=\'(.+)\'$/g;
        let viewPattern =/^\$view\=\'(.+)\'\&app\=\'(.+)\'$/g;

        let currentInputLine = input[i];

        let moduleMatch = modulePattern.exec(currentInputLine);
        let controllerMatch = controlerPattern.exec(currentInputLine);
        let modelMatch = modelPattern.exec(currentInputLine);
        let viewMatch = viewPattern.exec(currentInputLine);

        if (moduleMatch){

            let moduleName = moduleMatch[1];

            if (cacheData.has(moduleName)){
                data.set(moduleName, cacheData.get(moduleName));
            } else {
                data.set(moduleName, new Map());
                data.get(moduleName).set('controllers', []);
                data.get(moduleName).set('models', []);
                data.get(moduleName).set('views', []);
            }
        } else if (controllerMatch) {
            let controllerName = controllerMatch[1];
            let moduleName = controllerMatch[2];

            if (data.has(moduleName)) {
                data.get(moduleName).get('controllers').push(controllerName);
            } else {
                if (!cacheData.has(moduleName)) {
                    cacheData.set(moduleName, new Map());
                    cacheData.get(moduleName).set('controllers', []);
                    cacheData.get(moduleName).set('models', []);
                    cacheData.get(moduleName).set('views', []);
                }
                cacheData.get(moduleName).get('controllers').push(controllerName);

            }
        }else if (modelMatch) {
                let modelName = modelMatch[1];
                let moduleName = modelMatch[2];

                if (data.has(moduleName)){
                    data.get(moduleName).get('models').push(modelName);
                } else {
                    if (!cacheData.has(moduleName)){
                        cacheData.set(moduleName, new Map());
                        cacheData.get(moduleName).set('controllers', []);
                        cacheData.get(moduleName).set('models', []);
                        cacheData.get(moduleName).set('views', []);
                    }
                    cacheData.get(moduleName).get('model').push(modelName);

                }
        } else if (viewMatch){
                let viewName = viewMatch[1];
                let moduleName = viewMatch[2];

                if (data.has(moduleName)){
                    data.get(moduleName).get('views').push(viewName);
                } else {
                    if (!cacheData.has(moduleName)){
                        cacheData.set(moduleName, new Map());
                        cacheData.get(moduleName).set('controllers', []);
                        cacheData.get(moduleName).set('models', []);
                        cacheData.get(moduleName).set('views', []);
                    }
                    cacheData.get(moduleName).get('views').push(viewName);

                }
        }
    }

    let sortedMap = new Map(Array.from(data.entries())
        .sort( function (firstEntry, secondEntry) {
        let firstEntryControllers=firstEntry[1]
            .get('controllers').length;
        let secondEntryControllers=secondEntry[1]
            .get('controllers').length;

            let result = secondEntryControllers - firstEntryControllers;

            if (result == 0){
                let firstEntryModels=firstEntry[1]
                    .get('models').length;
                let secondEntryModels=secondEntry[1]
                    .get('models').length;

                result = firstEntryModels - secondEntryModels;
            }

            return result;
    }));

    let sortedObject = {};
    
    sortedMap.forEach(function (value, key) {
        let controllers = value.get('controllers').sort();
        let models = value.get('models').sort();
        let views = value.get('views').sort();

        sortedObject[key] = {
            'controllers': controllers,
            'models': models,
            'views': views,
        };
    });

    console.log(JSON.stringify(sortedObject));
}

let arr = [
   "$app='MyApp'",
   "$controller='My Controller'&app='MyApp'",
   "$model='My Model'&app='MyApp'",
   "$view='My View'&app='MyApp'"
];

main(arr);