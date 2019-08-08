"use strict"
const Hapi = require('@hapi/hapi')
const handlebars = require('handlebars')
const vision = require('vision')
const inert = require ('inert')
const path = require ('path')
const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: 'localhost',
    routes:{
      files:{
        relativeTo: path.join(__dirname, 'public')
      }
    }
})
async function init(){


  try {
    await server.register(inert)
    await server.register(vision)
    server.views({
      engines: {
        hbs: handlebars
      },
      relativeTo: __dirname,
      path: 'views',
      layout: true,
      layoutPath : 'views'
    })
    
    server.route({
      method: 'GET',
      path: '/',
      handler: (req, h) => {
        return h.view('index', {
          title: 'home'
        })
      }
    })

    server.route({
      method:'GET',
      path:'/{param*}',
      handler: {
        directory:{
          path: '.',
          index: ['index.html']
        }
      }
    })
    await server.start()

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
  console.log(`Servidor lanzado en: ${server.info.uri}`)
}
init()