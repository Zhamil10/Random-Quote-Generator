import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typograhpy from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Card>
    <CardContent>
      <Typograhpy id="text">
        {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
      </Typograhpy>
    </CardContent>
    <CardActions>
      <Button id="new-quote" size="small" onClick={assignNewQuoteIndex}>
        Next Quote
      </Button>
      <IconButton
        id="tweet-quote"
        target="_blank"
        href={encodeURI(
          `https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`
        )}
      >
        <FontAwesomeIcon icon={faTwitter} size="md">
          {" "}
        </FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
);

export default QuoteMachine;
