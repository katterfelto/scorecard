import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

function ScoreCard(props) {
  let [count, setCount] = useState(0);

  useEffect(() => {
    props.resetScores.current = resetScore;
  }, [props.resetScores]);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function resetScore() {
    setCount(0);
  }

  return (
    <Card padding={10}>
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h5" align="left">
              {props.teamName}
            </Typography>
            <Typography variant="h4" align="right">
              {count}
            </Typography>
          </Stack>
          <Divider variant="middle" />
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <IconButton aria-label="plus">
              <RemoveCircleOutlineIcon onClick={() => decrement()} />
            </IconButton>
            <IconButton aria-label="minus">
              <AddCircleOutlineIcon onClick={() => increment()} />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ScoreCard;
