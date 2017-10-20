'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('you have successfully signed up!')
}

const signUpFailure = function (error) {
  $('#message').text('Your signup was unseccessful. Please try again.', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Incorrect Email or PW', error)
}

const signOutSuccess = function () {
  $('#message').text('You have successfully signed out')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Unable to sign out. Please try again', error)
}

const removeClass = function () {
  $('.signOut').removeClass('signOut')
  $('#change-Password').removeClass('signOut')
  $('#playInput').removeClass('signOut')
}

const addClass = function () {
  $('#signUpForm').addClass('signup')
  $('#sign-up-button').addClass('signup')
  $('#signInForm').addClass('signin')
  $('#sign-in-button').addClass('signin')
}

const signOutClass = function () {
  $('#signOut').addClass('signOut')
  $('#change-password').addClass('signOut')
  $('#playInput').addClass('signOut')
  $('#sign-up-button').removeClass('signup')
  $('#sign-in-button').removeClass('signin')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed Password successfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Incorrect PW. Please try again', error)
}

const playInputSuccess = function (data) {
  $('#message').text('Your play has been added!!')
  store.play = data.play
}

const playInputFailure = function (error) {
  $('#message').text('Your play could not be added', error)
}

const playShowSuccess = function (data) {
  const lastPlay = data.plays.length - 1
  $('#team').text('Team ' + JSON.stringify(data.plays[lastPlay].team))
  $('#yard_line').text('Yard Line ' + JSON.stringify(data.plays[lastPlay].yard_line))
  $('#play_type').text('Play Type ' + JSON.stringify(data.plays[lastPlay].play_type))
  $('#yards_gained').text('Yards Gained ' + JSON.stringify(data.plays[lastPlay].yards_gained))
  $('#play_result').text('Play Result ' + JSON.stringify(data.plays[lastPlay].play_result))
}

const playShowFailure = function (error) {
  $('#plays').text('Could not find any plays', error)
}

export {
  signUpFailure,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  removeClass,
  addClass,
  signOutSuccess,
  signOutFailure,
  signOutClass,
  changePasswordSuccess,
  changePasswordFailure,
  playInputSuccess,
  playInputFailure,
  playShowSuccess,
  playShowFailure
}
