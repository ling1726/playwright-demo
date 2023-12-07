import * as React from "react";
import {
  FluentProvider,
  Button,
  teamsLightTheme,
  Card,
  CardHeader,
  Caption1,
  CardFooter,
  CardPreview,
  Body1,
  makeStyles,
  shorthands,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@fluentui/react-components";
import {
  ArrowReplyRegular,
  ShareRegular,
  LinkRegular,
} from "@fluentui/react-icons";
import { TabListExample } from "./Tablist";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "720px",
    maxWidth: "100%",
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
});

function App() {
  const styles = useStyles();
  const [copied, setCopied] = React.useState(false);
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Card className={styles.card}>
        <CardHeader
          image={
            <img
              src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/avatar_elvia.svg"
              alt="Elvia Atkins avatar picture"
            />
          }
          header={
            <Body1>
              <b>Elvia Atkins</b> mentioned you
            </Body1>
          }
          description={<Caption1>5h ago · About us - Overview</Caption1>}
        />

        <CardPreview
          logo={
            <img
              src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/docx.png"
              alt="Microsoft Word document"
            />
          }
        >
          <TabListExample />
          <img
            src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/doc_template.png"
            alt="Preview of a Word document: About Us - Overview"
          />
        </CardPreview>

        <CardFooter>
          <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
          <Dialog onOpenChange={(e, data) => !data.open && setCopied(data.open)}>
            <DialogTrigger disableButtonEnhancement>
              <Button
                appearance="primary"
                icon={<ShareRegular fontSize={16} />}
              >
                Share
              </Button>
            </DialogTrigger>
            <DialogSurface data-testid="share-dialog" style={{transition: 'none'}} backdrop={{style: {transition: 'none'}}}>
              <DialogBody>
                <DialogTitle>Share 'About us.docx'</DialogTitle>
                <DialogContent>
                  Users in your organization can edit
                </DialogContent>
                <DialogActions>
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="secondary">Close</Button>
                  </DialogTrigger>
                  <Button
                    data-testid="copy-button"
                    onClick={() => setCopied(true)}
                    appearance="primary"
                    icon={copied ? undefined : <LinkRegular />}
                  >
                    {copied ? "Link copied!" : "Copy link"}
                  </Button>
                </DialogActions>
              </DialogBody>
            </DialogSurface>
          </Dialog>
        </CardFooter>
      </Card>
    </FluentProvider>
  );
}

export default App;
