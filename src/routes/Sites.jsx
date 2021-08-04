import React from "react";
import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Card, Container, IconButton, makeStyles } from "@material-ui/core";
import { sites } from "../assets/data";
import { BigTooltip, PageTop } from "../global";

const useLocalStyles = makeStyles((theme) => ({
  header: {
    color: "white",
  },
  url: {
    color: "white",
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(4),
    margin: theme.spacing(4),
  },
}));

const Sites = () => {
  const local = useLocalStyles();

  return (
    <main>
      <Container maxWidth="md">
        <PageTop pageTitle="My Websites" />
        {sites.map((site) => (
          <Card key={site.url} className={local.card}>
            <h2>{site.name}</h2>
            <p>{site.description}</p>
            <BigTooltip
              title={
                <>
                  <h3 className={local.header}>Site:</h3>
                  <code className={local.url}>{site.url}</code>
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
                    <h3 className={local.header}>Source Code:</h3>
                    <code className={local.url}>{site.srcCode}</code>
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
    </main>
  );
};

export default Sites;
