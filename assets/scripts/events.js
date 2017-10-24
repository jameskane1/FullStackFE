'user strict'
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createSignUp(data)
    .then(ui.signUpSuccess)
    .then(() => {
      $('#signUpForm')[0].reset()
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createSignIn(data)
    .then(ui.signInSuccess)
    .then(ui.removeClass)
    .then(ui.addClass)
    .then(() => {
      $('#signInForm')[0].reset()
    })
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .then(ui.signOutClass)
    .then(() => {
      $('#change-password')[0].reset()
    })
    .then(() => {
      $('#playInput')[0].reset()
    })
    .then(() => {
      $('#signUpForm')[0].reset()
    })
    .then(() => {
      $('#signInForm')[0].reset()
    })
    .then(() => {
      $('#delete_play')[0].reset()
    })
    .then(() => {
      $('#updatePlay')[0].reset()
    })
    .then(() => {
      $('#get1Play')[0].reset()
    })
    .then(() => {
      $('#previousPlaysMessage').empty()
    })
    .then(() => {
      $('#lastPlay').empty()
    })
    .then(() => {
      $('#team').empty()
    })
    .then(() => {
      $('#yard_line').empty()
    })
    .then(() => {
      $('#play_type').empty()
    })
    .then(() => {
      $('#yards_gained').empty()
    })
    .then(() => {
      $('#play_result').empty()
    })
    .then(ui.changePWClass)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .then(() => {
      $('#change-password')[0].reset()
    })
    .catch(ui.changePasswordFailure)
}

const onPlayInput = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.playInput(data)
    .then(ui.playInputSuccess)
    .then(onPlayShow)
    .then(() => {
      $('#playInput')[0].reset()
    })
    .then(() => {
      $('#previousPlaysMessage').empty()
    })
    .then(() => {
      $('#plays').addClass('signOut')
    })
    .then(() => {
      $('#updatePlay').addClass('signOut')
    })
    .then(() => {
      $('#previousPlays').removeClass('signOut')
    })
    .catch(ui.playInputFailure)
}

const onPlayShow = function () {
  api.playData()
    .then(ui.playShowSuccess)
    .catch(ui.playShowSuccess)
}

const onPreviousPlayShow = function (event) {
  event.preventDefault()
  api.playData()
    .then(ui.previousPlaysSuccess)
    .then(() => {
      $('#previousPlays').addClass('signOut')
    })
    .catch(ui.previousPlaysFailure)
}

const onDeletePlay = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.deletePlay(data)
    .then(ui.deletePlaySuccess)
    .then(() => {
      $('#delete_play')[0].reset()
    })
    .then(() => {
      $('#previousPlaysMessage').empty()
    })
    .then(() => {
      $('#plays').addClass('signOut')
    })
    .then(() => {
      $('#updatePlay').addClass('signOut')
    })
    .then(() => {
      $('#previousPlays').removeClass('signOut')
    })
    .catch(ui.deletePlayFailure)
}

const onUpdatePlay = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updatePlay(data)
    .then(ui.updatePlaySuccess)
    .then(() => {
      $('#updatePlay')[0].reset()
    })
    .then(() => {
      $('#previousPlaysMessage').empty()
    })
    .then(() => {
      $('#plays').addClass('signOut')
    })
    .then(() => {
      $('#updatePlay').addClass('signOut')
    })
    .then(() => {
      $('#previousPlays').removeClass('signOut')
    })
    .catch(ui.updatePlayFailure)
}

const onGet1Play = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.get1Play(data)
    .then(ui.get1PlaySuccess)
    .then(() => {
      $('#get1Play')[0].reset()
    })
    .then(() => {
      $('#lastPlay').empty()
    })
    .then(() => {
      $('#plays').removeClass('signOut')
    })
    .then(() => {
      $('#updatePlay').removeClass('signOut')
    })
    .then(() => {
      $('#previousPlays').removeClass('signOut')
    })
    .then(ui.updateClass)
    .then(ui.get1PlayShow)
    .catch(ui.get1PlayFailure)
}

export {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onPlayInput,
  onPlayShow,
  onPreviousPlayShow,
  onDeletePlay,
  onUpdatePlay,
  onGet1Play
}
