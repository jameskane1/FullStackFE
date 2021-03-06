'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const submitValues = require('./events.js')

$(() => {
  setAPIOrigin(location, config)

  // sign up button functionality
  $('#sign-up-button').click(function () {
    $('#signUpForm').removeClass('signup')
    $('#sign-up-button').addClass('signup')
  })
  // sign in button functionality
  $('#sign-in-button').click(function () {
    $('#signInForm').removeClass('signin')
    $('#sign-in-button').addClass('signin')
  })

  $('#hideSignUp').click(function () {
    $('#signUpForm').addClass('signup')
    $('#sign-up-button').removeClass('signup')
  })

  $('#hideSignIn').click(function () {
    $('#signInForm').addClass('signin')
    $('#sign-in-button').removeClass('signin')
  })

  $('#changePassWord').click(function () {
    $('#change-password').removeClass('changePW')
    $('#changePassWord').addClass('signin')
  })

  // form submit functionality
  $('#signUpForm').on('submit', submitValues.onSignUp)

  // sign up event handler
  $('#signInForm').on('submit', submitValues.onSignIn)
  // sign out handler
  $('#sign-out-button').on('click', submitValues.onSignOut)

  $('#change-password').on('submit', submitValues.onChangePassword)

  $('#playInput').on('submit', submitValues.onPlayInput)

  $('#previousPlays').on('click', submitValues.onPreviousPlayShow)

  $('#delete_play').on('submit', submitValues.onDeletePlay)

  // Update play form submittal
  $('#updatePlay').on('submit', submitValues.onUpdatePlay)

  // get on play id
  $('#get1Play').on('submit', submitValues.onGet1Play)

  document.body.style.backgroundColor = 'transparent'
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
