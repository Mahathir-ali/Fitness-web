import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
const SimilarExercises = ({ exerciseEquipment, exerciseTarget }) => {
  return (
    <Box sx={{ mt: { lg: "100px", sx: 0 } }}>
      <Typography variant="h4" mn="5">
        Exercises that target same muscle group
      </Typography>
      <Stack flexDirection="row" sx={{ p: "2", position: "relative" }}>
        {exerciseTarget.length ? (
          <HorizontalScrollbar data={exerciseTarget} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h4" mn="5">
        Exercises that use same equipment
      </Typography>
      <Stack flexDirection="row" sx={{ p: "2", position: "relative" }}>
        {exerciseEquipment.length ? (
          <HorizontalScrollbar data={exerciseEquipment} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
