'use strict'

const config = require('./config.js')
const store = require('./store')

const createSignUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const createSignIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const playInput = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/plays',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const playData = function () {
  return $.ajax({
    url: config.apiOrigin + '/plays',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePlay = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/plays/' + data.play.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const get1Play = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/plays/' + data.play.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updatePlay = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/plays/' + store.play1.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createSignUp,
  createSignIn,
  signOut,
  changePassword,
  playInput,
  playData,
  deletePlay,
  updatePlay,
  get1Play
}
