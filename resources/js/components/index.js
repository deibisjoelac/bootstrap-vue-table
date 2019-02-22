import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const files = require.context('./', true, /\.vue$/i)
files.keys().forEach(fileName => {
    const componentConfig = files(fileName)
    const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\//,'').replace(/\.\w+$/, ''))
    )
    Vue.component(componentName, componentConfig.default || componentConfig)
})