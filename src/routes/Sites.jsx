import React from "react";
import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Card, Container, IconButton, makeStyles } from "@material-ui/core";
import { sites } from "../assets/data";
import { BigTooltip, PageTop } from "../global";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "white",
  },
  url: {
    color: "white",
    padding: theme.spacing(1),
  },
}));

const Sites = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className="content">
      <PageTop pageTitle="My Websites" />
      {sites.map((site) => (
        <Card key={site.url} className="card">
          <h2>{site.name}</h2>
          <p>{site.description}</p>
          <BigTooltip
            title={
              <>
                <h3 className={classes.header}>Site:</h3>
                <code className={classes.url}>{site.url}</code>
              </>
            }
          >
            <IconButton
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchSharpIcon />
            </IconButton>
          </BigTooltip>
          {site.srcCode && (
            <BigTooltip
              title={
                <>
                  <h3 className={classes.header}>Source Code:</h3>
                  <code className={classes.url}>{site.srcCode}</code>
                </>
              }
            >
              <IconButton
                href={site.srcCode}
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
};

export default Sites;
