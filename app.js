const { Console } = require('console')
const os = require('os')
const path = require('path')
const { readFile, writeFile } = require('fs')
const http = require('http');


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

