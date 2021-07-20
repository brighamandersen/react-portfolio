import React from "react";
import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconButton, Tooltip } from "@material-ui/core";
import sites from "./assets/sites";

const TooltipTitle = ({ url, isSrcCode = false }) => (
  <>
    {isSrcCode ? "Source Code:" : "Site:"}
    <br />
    <code className="url-code">{url}</code>
  </>
);

const Sites = () => (
  <div className="content sites-page">
    <h1>Sites</h1>
    <ul>
      {sites.map((site) => (
        <div key={site.url} className="card">
          <h3>{site.name}</h3>

          <Tooltip title={<TooltipTitle url={site.url} />} arrow>
            <IconButton
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchSharpIcon />
            </IconButton>
          </Tooltip>
          {site.srcCode && (
            <Tooltip
              title={<TooltipTitle url={site.srcCode} isSrcCode />}
              arrow
            >
              <IconButton
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      ))}
    </ul>
  </div>
);

export default Sites;
