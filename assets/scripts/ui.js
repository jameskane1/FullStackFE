'use strict'

const store = require('./store')
const showPlaysTemplate = require('/Users/n0252077/wdi/projects/Jimmy_Kane_FullStackFE/assets/scripts/templates/helpers/previousPlays.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('you have successfully signed up!')
  $('#message').prepend('<img id="theImg" img class="tommytd" src="https://media.rbl.ms/image?u=%2Ffiles%2F2015%2F07%2F17%2F635727730275772136-426711804_image.jpg&ho=http%3A%2F%2Fcdn1.theodysseyonline.com&s=877&h=b006888de789759d6e3d505b613a7b93e2501b5fbbed6f4ba7246abb335aa35f&size=980x&c=3161196094" />')
}

const signUpFailure = function (error) {
  $('#message').text('Your signup was unsuccessful. Please try again.', error)
  $('#message').prepend('<img id="theImg" img class="tommytd" src="http://static.socialitelife.com/uploads/2013/08/01/Tom-Brady-birthday-08012013-12-580x435.jpg" />')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  store.user = data.user
  $('#message').prepend('<img id="theImg" img class="tommytd" src="http://i4.dailyrecord.co.uk/incoming/article5084433.ece/ALTERNATES/s615/JS55773878-1.jpg" />')
}

const signInFailure = function (error) {
  $('#message').text('Incorrect Email or PW', error)
}

const signOutSuccess = function () {
  $('#message').text('You have successfully signed out')
  store.user = null
  $('#message').prepend('<img id="theImg" img class="tommytd" src="http://usatthebiglead.files.wordpress.com/2012/08/tom-brady-happy-face.jpg" />')
}

const signOutFailure = function (error) {
  $('#message').text('Unable to sign out. Please try again', error)
}

const removeClass = function () {
  $('.signOut').removeClass('signOut')
  $('#changePassWord').removeClass('signin')
  $('#change-Password').removeClass('changePW')
  $('#playInput').removeClass('signOut')
  $('#get1Play').removeClass('signOut')
}

const addClass = function () {
  $('#signUpForm').addClass('signup')
  $('#plays').addClass('signOut')
  $('#sign-up-button').addClass('signup')
  $('#signInForm').addClass('signin')
  $('#sign-in-button').addClass('signin')
}

const updateClass = function () {
  $('#updatePlay').removeClass('changePlay')
}

const signOutClass = function () {
  $('#signOut').addClass('signOut')
  $('#playInput').addClass('signOut')
  $('#plays').addClass('signOut')
  $('#previous').addClass('signOut')
  $('#updatePlay').addClass('changePlay')
  $('#get1Play').addClass('signOut')
  $('#delete_play').addClass('signOut')
  $('#sign-up-button').removeClass('signup')
  $('#sign-in-button').removeClass('signin')
}
const changePWClass = function () {
  $('#change-password').addClass('changePW')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed Password successfully')
  $('#message').prepend('<img id="theImg" img class="tommytd" src="https://cbssports.com/images/blogs/Tom_Brady_Facebook_Post_Were_On_To_Buffalo.png" />')
}

const changePasswordFailure = function (error) {
  $('#message').text('Incorrect PW. Please try again', error)
}

const playInputSuccess = function (data) {
  $('#message').text('Your play has been added!!')
  store.play = data.play
  $('#message').prepend('<img id="theImg" img class="tommytd" src="https://i.pinimg.com/736x/cc/45/17/cc4517dde9d5af605c027374aa9cfa7d--th-birthday-happy-birthdays.jpg" />')
}

const playInputFailure = function (error) {
  $('#message').text('Your play could not be added', error)
}

const playShowFailure = function (error) {
  $('#plays').text('Could not find any plays', error)
}

const get1PlayShow = function (data) {
  $('#lastPlay').text('Below is the info for the searched play id :' + store.play1.id)
  $('#team').text('Team ' + JSON.stringify(store.play1.team))
  $('#yard_line').text('Yard Line ' + JSON.stringify(store.play1.yard_line))
  $('#play_type').text('Play Type ' + JSON.stringify(store.play1.play_type))
  $('#yards_gained').text('Yards Gained ' + JSON.stringify(store.play1.yards_gained))
  $('#play_result').text('Play Result ' + JSON.stringify(store.play1.play_result))
}

const previousPlaysSuccess = function (data) {
  if (data.plays[0] === null || data.plays[0] === '' || data.plays[0] === undefined || data.plays[0] === 0 || data.plays[0] === false) {
    $('#previousPlaysMessage').text('You need to add a play to view all plays')
  } else {
    const showPlaysHtml = showPlaysTemplate({ plays: data.plays })
    $('#previousPlaysMessage').append(showPlaysHtml)
  }
}

const previousPlaysFailure = function (error) {
  $('#message').text('Your plays cannot be viewed', error)
}

const deletePlaySuccess = function (data) {
  $('#message').text('Your play was deleted')
  $('#message').prepend('<img id="theImg" img class="tommytd" src="https://www.gannett-cdn.com/-mm-/1ae56f03a80de4c1b6acf60e1b19ff90e3a94d8c/c=66-69-883-683&r=x393&c=520x390/local/-/media/2017/02/05/USATODAY/USATODAY/636219346127531736-USP-NFL-SUPER-BOWL-LI-NEW-ENGLAND-PATRIOTS-VS-ATL-88578658.JPG" />')
}

const deletePlayFailure = function (error) {
  $('#message').text('Your plays cannot be deleted at this time', error)
}

const updatePlaySuccess = function (data) {
  $('#message').text('Your play has been updated!')
}

const updatePlayFailure = function (error) {
  $('#message').text('Your plays cannot be updated at this time', error)
}

const get1PlaySuccess = function (data) {
  $('#message').text('Your input play has been selected to be edited')
  store.play1 = data.play
}

const get1PlayFailure = function (error) {
  $('#message').text('Your play could not be retrived', error)
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
  playShowFailure,
  previousPlaysSuccess,
  previousPlaysFailure,
  deletePlaySuccess,
  deletePlayFailure,
  updatePlaySuccess,
  updatePlayFailure,
  get1PlaySuccess,
  get1PlayFailure,
  updateClass,
  changePWClass,
  get1PlayShow
}
