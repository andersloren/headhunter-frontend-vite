# Headhunter

## Demo

A quick demo of what Headhunter does. 

Ps. Generating the ad takes about 10 seconds

![demo](demo/quick_demo_core_functions.gif)

## About

This is the new (!) frontend part of the internship project Headhunter originally created by [Anders Lorén](https://github.com/andersloren) and [Mikael Engvall](https://github.com/mikaelengvall).

## Purpose

The project was ordered by Swedish Consulting Group as a tool for its customers to more easily create HTML job advertisements.

## How it works

The application sends a request with a set of instructions and a job description to the OpenAI API, which returns a string that can be saved as an HTML file.

## Other parts of the project

The [previous frontend](https://github.com/andersloren/headhunter-frontend) was based on create-react-app. After a recent webpack update, I decided to migrate the codebase to a Vite build for improved performance and development experience.

The backend can be found [here](https://github.com/andersloren/headhunter).
