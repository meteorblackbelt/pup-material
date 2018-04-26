import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import { Button, ButtonIcon } from 'rmwc/Button';
import { Grid, GridCell } from 'rmwc/Grid';
import { Icon } from 'rmwc/Icon';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from 'rmwc/Card';

import './Index.scss';

const Index = ({name, history}) => (
  <Card className="Index">
    <img
      src="https://s3-us-west-2.amazonaws.com/cleverbeagle-assets/graphics/email-icon.png"
      alt="Clever Beagle"
    />
    <h1>{Meteor.settings.public.AppName}</h1>
    <p>A boilerplate for products.</p>
    <div className="horizontal-buttons">
      <Button theme="secondary-bg text-secondary-on-background" onClick={() => window.open("http://cleverbeagle.com/pup", "_blank")} raised>Read the Docs</Button>
      <Button theme="secondary-bg text-secondary-on-background" onClick={() => window.open("https://github.com/meteorblackbelt/pup", "_blank")} raised><ButtonIcon>star</ButtonIcon> Star on GitHub</Button>
    </div>
    <footer>
      <p>Need help and want to stay accountable building your product? <a href="https://cleverbeagle.com?utm_source=pupappindex&utm_medium=app&utm_campaign=oss">Check out Clever Beagle</a>.</p>
    </footer>
  </Card>
);

export default withRouter(Index);
