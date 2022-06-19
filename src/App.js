import React, { useRef, useState } from "react";
import { AppBar, Box, Grid, Toolbar } from "@mui/material";
import { Typography, IconButton } from "@mui/material";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import ClearAllIcon from "@mui/icons-material/RestartAlt";

//import ScorePanel from './ScorePanel.js';
import ScoreCard from "./components/ScoreCard.js";

export default function ButtonAppBar() {
  let [teams, setTeams] = useState(["Gold", "NOT Gold"]);

  const resetScores = useRef(null);

  const handle2Teams = () => {
    setTeams(["Gold", "NOT Gold"]);
  };

  const handle3Teams = () => {
    setTeams(["Red", "Green", "Blue"]);
  };

  const handle4Teams = () => {
    setTeams(["Red", "Green", "Blue", "Yellow"]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Scorecard
          </Typography>
          <IconButton aria-label="2teams" size="large">
            <Filter2Icon fontSize="inherit" onClick={() => handle2Teams()} />
          </IconButton>
          <IconButton aria-label="3teams" size="large">
            <Filter3Icon fontSize="inherit" onClick={() => handle3Teams()} />
          </IconButton>
          <IconButton aria-label="4teams" size="large">
            <Filter4Icon fontSize="inherit" onClick={() => handle4Teams()} />
          </IconButton>
          <IconButton aria-label="resetScores" size="large">
            <ClearAllIcon
              fontSize="inherit"
              onClick={() => resetScores.current()}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {teams.map((team, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <ScoreCard teamName={team} resetScores={resetScores} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
