'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

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
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
