import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  exercisesOptions,
  fetchData,
  youTubeOptions,
} from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciserVideos from "../components/ExerciserVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExercisesDetail] = useState({});
  const [exerciseVideos, setExercisesVideos] = useState([]);
  const [exerciseTarget, setExerciseTarget] = useState([]);
  const [exerciseEquipment, setExercisesEquipment] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercises.p.rapidapi.com";
      const youTubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exercisesOptions
      );
      setExercisesDetail(exerciseData);

      const exerciseVideosData = await fetchData(
        `${youTubeSearchUrl}/search?query=${exerciseData.name}`,
        youTubeOptions
      );
      setExercisesVideos(exerciseVideosData.contents);

      const targetMusclesExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseData.target}`,
        exercisesOptions
      );
      setExerciseTarget(targetMusclesExercisesData);
      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseData.equipment}`,
        exercisesOptions
      );
      setExercisesEquipment(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciserVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        exerciseTarget={exerciseTarget}
        exerciseEquipment={exerciseEquipment}
      />
    </Box>
  );
};

export default ExerciseDetail;
