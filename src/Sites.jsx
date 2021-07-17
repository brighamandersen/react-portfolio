import React from "react";
import LaunchSharpIcon from '@material-ui/icons/LaunchSharp';
import { IconButton, Tooltip } from "@material-ui/core";












const mySites = [
    {
        name: 'Ponderizer',
        url: 'https://ponderizer.brighamband.com',
        category: 'school',
        description: '',
        srcCode: '',
    },
    {
        name: 'NBA Insider Hub',
        url: 'https://bball.brighamband.com',
        category: 'school',
        description: '',
        srcCode: '',
    },
    {
        name: 'Jokester',
        url: 'https://jokester.brighamband.com',
        category: 'side',
        description: 'A website which displays random coding and dad jokes, then allows you to save your favorites so you can view them later',
        srcCode: '',
    },
    {
        name: 'Scoreboard',
        url: 'https://scoreboard.brighamband.com',
        category: 'side',
        description: 'Birthday present for my dad (he loves sports and stats, so he naturally loves scorekeeping)',
        srcCode: 'https://github.com/brighamband/scoreboard',
    },
    {
        name: 'Simple Counter',
        url: 'https://brighamband.github.io/simple-counter',
        category: 'side',
        description: '',
        srcCode: '',
    },
    {
        name: 'Simple Calculator',
        url: 'https://brighamband.github.io/simple-calculator',
        category: 'side',
        description: '',
        srcCode: '',
    },
    {
        name: 'Weather Rain or Shine',
        url: 'https://weather.brighamband.com',
        category: 'school',
        description: '',
        srcCode: '',
    },
    {
        name: 'K9 Directory',
        url: 'https://brighamband.github.io/k9-directory',
        category: 'side',
        description: '',
        srcCode: '',
    },
    {
        name: 'Snake',
        url: 'https://snake.brighamband.com',
        category: 'side',
        description: '',
        srcCode: '',
    },
    {
        name: 'Piano',
        url: 'https://piano.brighamband.com',
        category: 'side',
        description: '',
        srcCode: '',
    },
    {
        name: 'Tic Tac Toe',
        url: 'https://tictactoe.brighamband.com',
        category: 'side',
        description: '',
        srcCode: '',
    },
    {
        name: 'Photography',
        url: 'https://photography.brighamband.com',
        category: 'school',
        description: '',
        srcCode: '',
    },
    {
        name: 'Material Todo',
        url: 'https://brighamband.github.io/material-todo',
        category: ['side', 'work', 'beta'],
        description: 'Still missing a lot of functionality.  For a job interview I made this showing my skills in Material UI and React, now I need to hook up a back-end or at least add add/delete functionality.',
        srcCode: '',
    },
    {
        name: 'Silver Fund Educator',
        url: 'https://silverfund.byu.edu',
        category: 'work',
        description: '',
        srcCode: '',
    },
    {
        name: 'No End Insight',
        url: 'https://nei.brighamband.com',
        category: ['school', 'side', 'beta'],
        description: 'Still under development, only the front-end was completed for school.  Now I\'m working on hooking it up to a back-end for fun!',
        srcCode: '',
    },
    {
        name: 'Comics Browser',
        url: 'https://comics.brighamband.com',
        category: 'school',
        description: '',
        srcCode: '',
    },
    {
        name: 'Mother Earth Groceries',
        url: 'https://groceries.brighamband.com',
        category: 'school',
        tags: ['vue', 'css'],
        description: '',
        srcCode: '',
    },
    
    {
        name: 'Say Hello Greeter',
        url: 'https://codepen.io/brighamband/pen/qBrxPgg',
        category: 'side',
        tags: ['html', 'css', 'js'],
        description: 'I was learning Android, and before I made this greeter there, I made it using javascript to compare and contrast the two.',
        srcCode: '',
    },
    {
        name: 'Pecos Solutions',
        url: 'https://pecos-solutions.com',
        category: ['work'],
        tags: ['react', 'mui', 'aws',],
        description: 'A web app used to preview and download records/documents by county',
        srcCode: 'https://github.com/Pecos-Solutions/pecos',
    },
     {
        name: 'Portfolio (This Website!)',
        url: 'https://brighamband.com',
        category: ['side', 'work', 'beta'],
        description: '',
        srcCode: '',
    },
    // {
    //     name: 'Museum of Ordinary Objects',
    //     url: 'https://museum.brighamband.com/',
    //     category: 'school',
    //     description: '',
    //     srcCode: '',
    // },
    // {
    //     name: 'Photo Bomb',
    //     url: 'https://photobomb.brighamband.com/',
    //     category: 'side',
    //     description: 'Photos uploader, sharer, and viewer',
    //     srcCode: 'https://github.com/brighamband/photobomb',
    // },
]

const TooltipTitle = ({ url, isSrcCode = false }) => (
  <>
    {isSrcCode ? 'Source Code:' : 'Site:'}
    <br/>
    <code className="url-code">{url}</code>
  </>
)

const Sites = () => (
  <div className="content sites-page">
    <h1>Sites</h1>
    <ul>
    {mySites.map(site => (
        <div key={site.url} className="card">
            <h3>{site.name}</h3>
            
              <Tooltip title={<TooltipTitle url={site.url} />} arrow>
                <IconButton href={site.url} target="_blank" rel="noopener noreferrer">
                  <LaunchSharpIcon className="external-link" />
                </IconButton>
              </Tooltip>
              {site.srcCode && (
                <Tooltip title={<TooltipTitle url={site.srcCode} isSrcCode />} arrow>
                  <IconButton href={site.url} target="_blank" rel="noopener noreferrer">
                    <LaunchSharpIcon className="external-link" />
                  </IconButton>
                </Tooltip>
              )}
              
        </div>
    ))}
    </ul>
  </div>
);

export default Sites;
