import React from "react";
import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Card, Container, IconButton } from "@material-ui/core";
import { sites } from "../assets/data";
import { BigTooltip } from "../global";

const CustomTitle = ({ url, isSrcCode = false }) => (
  <>
    <h3 className="tooltip-header">{isSrcCode ? "Source Code:" : "Site:"}</h3>
    <code className="tooltip-url">{url}</code>
  </>
);

const Sites = () => (
  <Container maxWidth="md" className="content">
    <h1>My Websites</h1>
    {sites.map((site) => (
      <Card key={site.url} className="card">
        <h2>{site.name}</h2>
        <p>{site.description}</p>
        <BigTooltip title={<CustomTitle url={site.url} />}>
          <IconButton href={site.url} target="_blank" rel="noopener noreferrer">
            <LaunchSharpIcon />
          </IconButton>
        </BigTooltip>
        {site.srcCode && (
          <BigTooltip title={<CustomTitle url={site.srcCode} isSrcCode />}>
            <IconButton
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </BigTooltip>
        )}
      </Card>
    ))}
  </Container>
);

export default Sites;
